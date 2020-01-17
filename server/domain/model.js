import { DataTypes } from 'sequelize';

function domain(sequelize) {
  const Domain = sequelize.define(
    'domain',
    {
      title: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
    },
  );

  Domain.lookup = async title => {
    const one = await Domain.findOne({ where: { title } });
    return one;
  };

  return Domain;
}

export default domain;
