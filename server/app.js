import express from 'express';
import morgan from 'morgan';
import { router, database } from './config';
import { Console } from './utils';

database.connect();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  Console.log(`${PORT}번 listen!`);
});
