import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import { Dish, MealCategory, Restaurant } from './models';
import api from './api';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

/* Enviroment variables */
dotenv.config();


const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "ec2-52-30-75-37.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "dndtgkibcswcmy",
  password: "42cbae4865e13cfc2fc2b152a1bc578ca199cf1eb7f68c98e8763f2bc3afd203",
  database: "d6c4fg1l615gh7",
  synchronize: true,
  logging: false,
  ssl: {
      rejectUnauthorized: false,
  },
  entities: [
    Restaurant,
    MealCategory,
    Dish
  ]
};



createConnection(typeOrmConfig).then(async connection => {
  const port = process.env.PORT || 8080;
  const app: express.Express = express();

  // TODO Add JWT validation and permissions system
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(logger('dev'));
  app.use('', api);

  app.listen(port, () => {
    console.log(`API REST running on port ${port}`);
  });
}).catch(error => console.log(error));
