import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import {MealCategory, Restaurant } from '../models';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


/* Enviroment variables */
dotenv.config();

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    ssl: {
      rejectUnauthorized: false,
    },
    entities: [
      Restaurant,
      MealCategory
    ]
};

createConnection(typeOrmConfig).then(async connection => {

    const saltRounds = 12;

    const sevi: Restaurant = new Restaurant();
    sevi.name = "Sevillano";
    sevi.fullname = "Sevillano";
    const seviSaved: Restaurant = await Restaurant.save(sevi) as Restaurant;

    const tortillas: MealCategory = new MealCategory();
    tortillas.fullname = 'Tortillas';
    tortillas.restaurant = seviSaved;
    await MealCategory.save(tortillas);

  throw 'Population completed! You can kill this process.';

}).catch(error => console.log(error));
