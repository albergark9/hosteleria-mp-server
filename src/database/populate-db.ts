import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { Dish, MealCategory, Restaurant } from '../models';
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
      MealCategory,
      Dish
    ]
};

createConnection(typeOrmConfig).then(async connection => {

    const saltRounds = 12;

    const sevi: Restaurant = new Restaurant();
    sevi.name = "Sevillano";
    sevi.fullname = "Sevillano";
    var seviSaved: Restaurant = await Restaurant.save(sevi) as Restaurant;

    const mealCat1: MealCategory = new MealCategory();
    mealCat1.fullname_es = 'Desayunos';
    mealCat1.fullname_en = 'Breakfast';
    mealCat1.restaurant = seviSaved;
    const mealCat1saved: MealCategory = await MealCategory.save(mealCat1);

    const dish11: Dish = new Dish();
    dish11.fullname_es = 'Tostadas';
    dish11.fullname_en = 'Toasts';
    dish11.prize = 2.40;
    dish11.meal_category = mealCat1saved;
    await Dish.save(dish11); 
    
    const dish12: Dish = new Dish();
    dish12.fullname_es = 'Croissants';
    dish12.fullname_en = 'Croissants';
    dish12.prize = 1.40;
    dish12.meal_category = mealCat1saved;
    await Dish.save(dish12);
    
    const dish13: Dish = new Dish();
    dish13.fullname_es = 'Magdalenas';
    dish13.fullname_en = 'Muffins';
    dish13.prize = 2.80;
    dish13.meal_category = mealCat1saved;
    await Dish.save(dish13);

    const mealCat2: MealCategory = new MealCategory();
    mealCat2.fullname_es = 'Tortillas';
    mealCat2.fullname_en = 'Omelettes';
    mealCat2.restaurant = seviSaved;
    await MealCategory.save(mealCat2);

    const mealCat3: MealCategory = new MealCategory();
    mealCat3.fullname_es = 'Raciones';
    mealCat3.fullname_en = 'Rations';
    mealCat3.restaurant = seviSaved;
    await MealCategory.save(mealCat3);

    const mealCat4: MealCategory = new MealCategory();
    mealCat4.fullname_es = 'Pinchos y Pulguitas';
    mealCat4.fullname_en = '';
    mealCat4.restaurant = seviSaved;
    await MealCategory.save(mealCat4);

    const mealCat5: MealCategory = new MealCategory();
    mealCat5.fullname_es = 'Platos Combinados';
    mealCat5.fullname_en = 'Combined Dishes';
    mealCat5.restaurant = seviSaved;
    await MealCategory.save(mealCat5);

    const mealCat6: MealCategory = new MealCategory();
    mealCat6.fullname_es = 'Bocadillos y Hamburguesas';
    mealCat6.fullname_en = 'Burguers and Sandwitches';
    mealCat6.restaurant = seviSaved;
    await MealCategory.save(mealCat6);

  throw 'Population completed! You can kill this process.';

}).catch(error => console.log(error));
