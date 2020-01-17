import { Sequelize } from 'sequelize';
import { dbConfig } from './configure-env';
import { Console } from '../utils';
import Domain from '../domain/model';

const db = {
  sequelize: null,

  async connect() {
    this.sequelize = new Sequelize(dbConfig());
    this.Domain = Domain(this.sequelize);

    this.sequelize
      .authenticate()
      .then(async () => {
        Console.log('⭕️ Connection has been established successfully.');
        await this.sequelize.sync();
      })
      .catch(err => {
        Console.error('❌  Unable to connect to the database:', err);
      });

    return db;
  },
};

export default db;
