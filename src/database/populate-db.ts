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

    var dish11: Dish = new Dish();
    dish11.fullname_es = 'Tostada con mermelada';
    dish11.fullname_en = 'Toasts with mermelade';
    dish11.description = 'Tostada con mantequilla y mermelada de distintos sabores';
    dish11.prize = 1.50;
    dish11.meal_category = mealCat1saved;
    await Dish.save(dish11); 

    var dish12: Dish = new Dish();
    dish12.fullname_es = 'Tostada de aceite';
    dish12.fullname_en = 'Toast with olive oil';
    dish12.description = 'Tostada con aceite de oliva virgen';
    dish12.prize = 1.50;
    dish12.meal_category = mealCat1saved;
    await Dish.save(dish12); 

    var dish13: Dish = new Dish();
    dish13.fullname_es = 'Tostada con tomate';
    dish13.fullname_en = 'Toast with tomato';
    dish13.description = 'Tostada con tomate y aceite de oliva virgen';
    dish13.prize = 1.50;
    dish13.meal_category = mealCat1saved;
    await Dish.save(dish13);
    
    var dish14: Dish = new Dish();
    dish14.fullname_es = 'Tostada con tomate y aguacate';
    dish14.fullname_en = 'Toast with tomato and avocado';
    dish14.description = 'Tostada con tomate y aguacate';
    dish14.prize = 2.50;
    dish14.meal_category = mealCat1saved;
    await Dish.save(dish14);

    var dish14: Dish = new Dish();
    dish14.fullname_es = 'Tostada con tomate y jamón york';
    dish14.fullname_en = 'Toast with tomato and ham';
    dish14.description = 'Tostada con tomate y jamón york';
    dish14.prize = 3.00;
    dish14.meal_category = mealCat1saved;
    await Dish.save(dish14);

    var dish15: Dish = new Dish();
    dish15.fullname_es = 'Tostada con tomate y jamón';
    dish15.fullname_en = 'Toast with tomato and ham';
    dish15.description = 'Tostada con tomate y jamón';
    dish15.prize = 3.00;
    dish15.meal_category = mealCat1saved;
    await Dish.save(dish15);

    
    const dish16: Dish = new Dish();
    dish16.fullname_es = 'Croissant';
    dish16.fullname_en = 'Croissant';
    dish16.description = 'Croissant a la plancha';
    dish16.prize = 1.20;
    dish16.meal_category = mealCat1saved;
    await Dish.save(dish16);

    const dish17: Dish = new Dish();
    dish17.fullname_es = 'Croissant con mermelada';
    dish17.fullname_en = 'Croissant with mermelade';
    dish17.description = 'Croissant a la plancha con mantequilla y mermelada';
    dish17.prize = 1.50;
    dish17.meal_category = mealCat1saved;
    await Dish.save(dish17);
    
    const dish18: Dish = new Dish();
    dish18.fullname_es = 'Magdalena';
    dish18.fullname_en = 'Muffin';
    dish18.description = 'Magdalena de Cervera de Pisuerga'
    dish18.prize = 1.00;
    dish18.meal_category = mealCat1saved;
    await Dish.save(dish18);

    const dish19: Dish = new Dish();
    dish19.fullname_es = 'Sobao';
    dish19.fullname_en = 'Sobao';
    dish19.description = 'Sobaos de Cervera de Pisuerga'
    dish19.prize = 1.00;
    dish19.meal_category = mealCat1saved;
    await Dish.save(dish19);

    const mealCat2: MealCategory = new MealCategory();
    mealCat2.fullname_es = 'Tortillas';
    mealCat2.fullname_en = 'Omelettes';
    mealCat2.restaurant = seviSaved;
    const mealCat2saved: MealCategory = await MealCategory.save(mealCat2);

    const dish20: Dish = new Dish();
    dish20.fullname_es = 'Española Clásica';
    dish20.fullname_en = 'Classic Spanish';
    dish20.description = 'Tortilla de patata clásica. Entera 12€'
    dish20.prize = 1.50;
    dish20.meal_category = mealCat2saved;
    await Dish.save(dish20);

    const dish21: Dish = new Dish();
    dish21.fullname_es = 'Jamón y queso';
    dish21.fullname_en = 'Jam and Cheese';
    dish21.description = 'Tortilla con jamón York, queso, mayonesa y tomate. Entera 14€'
    dish21.prize = 2.00;
    dish21.meal_category = mealCat2saved;
    await Dish.save(dish21);

    const dish22: Dish = new Dish();
    dish22.fullname_es = 'Morcilla';
    dish22.fullname_en = 'Morcilla';
    dish22.description = 'Tortilla con morcilla de Cervera y cebolla caramelizada. Entera 14€'
    dish22.prize = 2.00;
    dish22.meal_category = mealCat2saved;
    await Dish.save(dish22);

    const dish23: Dish = new Dish();
    dish23.fullname_es = 'Chaca';
    dish23.fullname_en = 'Chaca';
    dish23.description = 'Tortilla rellena de chaca. Entera 14€.'
    dish23.prize = 2.00;
    dish23.meal_category = mealCat2saved;
    await Dish.save(dish23);

    const dish24: Dish = new Dish();
    dish24.fullname_es = 'Mahonesa';
    dish24.fullname_en = 'Mayonaisse';
    dish24.description = 'Tortilla con mahonesa. Entera 14€'
    dish24.prize = 2.00;
    dish24.meal_category = mealCat2saved;
    await Dish.save(dish24);

    const dish25: Dish = new Dish();
    dish25.fullname_es = 'Cecina y queso de cabra';
    dish25.fullname_en = 'Beef jerky and goat cheese';
    dish25.description = 'Tortilla con cecina, queso de cabra y pimiento caramelizado. Entera 14€'
    dish25.prize = 2.00;
    dish25.meal_category = mealCat2saved;
    await Dish.save(dish25);

    const dish26: Dish = new Dish();
    dish26.fullname_es = 'Champiñones';
    dish26.fullname_en = 'Mushrooms';
    dish26.description = 'Tortilla con champiñones, bechamel y jamón. Entera 14€'
    dish26.prize = 2.00;
    dish26.meal_category = mealCat2saved;
    await Dish.save(dish26);

    const dish27: Dish = new Dish();
    dish27.fullname_es = 'Picante con alegrías riojanas';
    dish27.fullname_en = 'Spicy';
    dish27.description = 'Tortilla con pimientos riojanos picantes. Entera 14€'
    dish27.prize = 2.00;
    dish27.meal_category = mealCat2saved;
    await Dish.save(dish27);

    const mealCat3: MealCategory = new MealCategory();
    mealCat3.fullname_es = 'Pinchos y Pulguitas';
    mealCat3.fullname_en = 'Pinchos';
    mealCat3.restaurant = seviSaved;
    const mealCat3saved: MealCategory = await MealCategory.save(mealCat3);

    const dish31: Dish = new Dish();
    dish31.fullname_es = 'Pincho de la casa';
    dish31.fullname_en = 'Homemade pincho';
    dish31.description = 'Pincho  de patata con jamón';
    dish31.prize = 2.50;
    dish31.meal_category = mealCat3saved;
    await Dish.save(dish31);

    const dish32: Dish = new Dish();
    dish32.fullname_es = 'Pulguita de jamón con tomate';
    dish32.fullname_en = 'Sandwich with ham and tomato';
    dish32.description = 'Pulguita de jamón con aceite y tomate';
    dish32.prize = 1.50;
    dish32.meal_category = mealCat3saved;
    await Dish.save(dish32);


    const dish33: Dish = new Dish();
    dish33.fullname_es = 'Pulguita de jijas';
    dish33.fullname_en = 'Sandwich with mince';
    dish33.description = 'Pulguita de tortilla de jijas';
    dish33.prize = 2.00;
    dish33.meal_category = mealCat3saved;
    await Dish.save(dish33);

    const dish34: Dish = new Dish();
    dish34.fullname_es = 'Pulguita de bacon';
    dish34.fullname_en = 'Sandwich with bacon';
    dish34.description = 'Pulguita torilla, bacon y pimiento verde asado';
    dish34.prize = 2.00;
    dish34.meal_category = mealCat3saved;
    await Dish.save(dish34);

    const dish35: Dish = new Dish();
    dish35.fullname_es = 'Pulguita de bonito con alegría riojana';
    dish35.fullname_en = 'Spicy sandwich with tuna';
    dish35.description = 'Pulguita picante de bonito';
    dish35.prize = 2.00;
    dish35.meal_category = mealCat3saved;
    await Dish.save(dish35);

    const mealCat4: MealCategory = new MealCategory();
    mealCat4.fullname_es = 'Bocadillos y Hamburguesas';
    mealCat4.fullname_en = 'Burguers and Sandwitches';
    mealCat4.time = 'Mañana y tarde';
    mealCat4.restaurant = seviSaved;
    const mealCat4saved: MealCategory = await MealCategory.save(mealCat4);

    const dish41: Dish = new Dish();
    dish41.fullname_es = 'Jamón con tomate';
    dish41.fullname_en = 'Ham and tomato';
    dish41.description = 'Bocadillo de jamón, aceite y tomate';
    dish41.prize = 6.00;
    dish41.meal_category = mealCat4saved;
    await Dish.save(dish41);

    const dish42: Dish = new Dish();
    dish42.fullname_es = 'Cecina';
    dish42.fullname_en = 'Jerky';
    dish42.description = 'Bocadillo de cecina de la montaña palentina';
    dish42.prize = 6.00;
    dish42.meal_category = mealCat4saved;
    await Dish.save(dish42);

    const dish43: Dish = new Dish();
    dish43.fullname_es = 'Queso';
    dish43.fullname_en = 'Cheese';
    dish43.description = 'Bocadillo de queso';
    dish43.prize = 5.50;
    dish43.meal_category = mealCat4saved;
    await Dish.save(dish43);

    const dish44: Dish = new Dish();
    dish44.fullname_es = 'Chorizo, salchichón o lomo';
    dish44.fullname_en = 'Chorizo, salchichón o lomo';
    dish44.description = 'Bocadillo de chorizo, salchichón o lomo embuchado';
    dish44.prize = 5.00;
    dish44.meal_category = mealCat4saved;
    await Dish.save(dish44);

    const dish45: Dish = new Dish();
    dish45.fullname_es = 'Pincho de la casa';
    dish45.fullname_en = 'Homemade pincho';
    dish45.description = 'Bocadillo de pincho de la casa';
    dish45.prize = 6.50;
    dish45.meal_category = mealCat4saved;
    await Dish.save(dish45);

    const dish46: Dish = new Dish();
    dish46.fullname_es = 'Calamares';
    dish46.fullname_en = 'Squids';
    dish46.description = 'Bocadillo de calamares';
    dish46.prize = 6.50;
    dish46.meal_category = mealCat4saved;
    await Dish.save(dish46);

    const dish47: Dish = new Dish();
    dish47.fullname_es = 'Lomo, queso o pimientos';
    dish47.fullname_en = 'Loin, queese or peppers';
    dish47.description = 'Bocadillo de lomo con queso o pimientos';
    dish47.prize = 5.50;
    dish47.meal_category = mealCat4saved;
    await Dish.save(dish47);

    const dish48: Dish = new Dish();
    dish48.fullname_es = 'Pepito de ternera especial';
    dish48.fullname_en = 'Beef';
    dish48.description = 'Pepito de ternera especial';
    dish48.prize = 7.50;
    dish48.meal_category = mealCat4saved;
    await Dish.save(dish48);

    const dish49: Dish = new Dish();
    dish49.fullname_es = 'Bacon y queso';
    dish49.fullname_en = 'Queese Bacon';
    dish49.description = 'Bocadillos de bacon y queso';
    dish49.prize = 5.50;
    dish49.meal_category = mealCat4saved;
    await Dish.save(dish49);

    const dish40: Dish = new Dish();
    dish40.fullname_es = 'Hamburguesa Sevillano';
    dish40.fullname_en = 'Burger Sevillano';
    dish40.description = 'Haburguesa con carne de Cervera de Pisuerga';
    dish40.prize = 7.50;
    dish40.meal_category = mealCat4saved;
    await Dish.save(dish40);

    const mealCat5: MealCategory = new MealCategory();
    mealCat5.fullname_es = 'Platos Combinados';
    mealCat5.fullname_en = 'Combined Dishes';
    mealCat5.time = 'Tardes';
    mealCat5.restaurant = seviSaved;
    const mealCat5saved: MealCategory = await MealCategory.save(mealCat5);

    const dish50: Dish = new Dish();
    dish50.fullname_es = 'Huevos con lomo y patatas';
    dish50.fullname_en = 'Eggs, pork and potatoes';
    dish50.description = 'Huevos con lomo y patatas o ensalada (a elegir)';
    dish50.prize = 8.50;
    dish50.meal_category = mealCat5saved;
    await Dish.save(dish50);


    const dish51: Dish = new Dish();
    dish51.fullname_es = 'Huevos con pechuga y patatas';
    dish51.fullname_en = 'Eggs, chicken and potatoes';
    dish51.description = 'Huevos con pechuga de pollo y patatas o ensalada (a elegir)';
    dish51.prize = 8.50;
    dish51.meal_category = mealCat5saved;
    await Dish.save(dish51);

    const dish52: Dish = new Dish();
    dish52.fullname_es = 'Huevos con ternera y patatas';
    dish52.fullname_en = 'Eggs, beef and potatoes';
    dish52.description = 'Huevos con filete de ternera y patatas o ensalada (a elegir)';
    dish52.prize = 9.00;
    dish52.meal_category = mealCat5saved;
    await Dish.save(dish52);

    const dish53: Dish = new Dish();
    dish53.fullname_es = 'Ensalada mixta';
    dish53.fullname_en = 'Salad';
    dish53.description = 'Ensalada mixta de la casa: tomate, lechuga, cebolla, espárrago, bonito, huevo cocido y aceitunas';
    dish53.prize = 8.50;
    dish53.meal_category = mealCat5saved;
    await Dish.save(dish53);

    const mealCat6: MealCategory = new MealCategory();
    mealCat6.fullname_es = 'Raciones';
    mealCat6.fullname_en = 'Rations';
    mealCat6.time = 'Tardes';
    mealCat6.restaurant = seviSaved;
    const mealCat6saved: MealCategory = await MealCategory.save(mealCat6);


    const dish60: Dish = new Dish();
    dish60.fullname_es = 'Huevos rotos con jamón ibérico';
    dish60.fullname_en = 'Eggs with iberic ham';
    dish60.description = 'Huevos rotos con jamón ibérico';
    dish60.prize = 9.50;
    dish60.meal_category = mealCat6saved;
    await Dish.save(dish60);


    const dish61: Dish = new Dish();
    dish61.fullname_es = 'Huevos rotos con boletus';
    dish61.fullname_en = 'Eggs with mushrooms';
    dish61.description = 'Huevos rotos con boletus y jamón ibérico';
    dish61.prize = 9.50;
    dish61.meal_category = mealCat6saved;
    await Dish.save(dish61)

    const dish62: Dish = new Dish();
    dish62.fullname_es = 'Huevos rotos con gulas y gambas';
    dish62.fullname_en = 'Eggs with gulas and shrimps';
    dish62.description = 'Huevos rotos con gulas y gambas';
    dish62.prize = 9.00;
    dish62.meal_category = mealCat6saved;
    await Dish.save(dish62);

    const dish63: Dish = new Dish();
    dish63.fullname_es = 'Huevos rotos con chistorra';
    dish63.fullname_en = 'Eggs with chistorra';
    dish63.description = 'Huevos rotos con chistorra';
    dish63.prize = 9.00;
    dish63.meal_category = mealCat6saved;
    await Dish.save(dish63);

    const dish64: Dish = new Dish();
    dish64.fullname_es = 'Patatas bravas';
    dish64.fullname_en = 'Potatoes with spicy sauce';
    dish64.description = 'Patatas bravas';
    dish64.prize = 4.50;
    dish64.meal_category = mealCat6saved;
    await Dish.save(dish64);

    const dish65: Dish = new Dish();
    dish65.fullname_es = 'Rabas';
    dish65.fullname_en = 'Fried squid';
    dish65.description = 'Rabas (calamares)';
    dish65.prize = 8.00;
    dish65.meal_category = mealCat6saved;
    await Dish.save(dish65);

    const dish66: Dish = new Dish();
    dish66.fullname_es = 'Pimientos con anchoas';
    dish66.fullname_en = 'Peppers with anchoas';
    dish66.description = 'Pimientos de piquillo con anchoas, cebolla, aceitunas, aderezado con balsámico de Modena';
    dish66.prize = 8.50;
    dish66.meal_category = mealCat6saved;
    await Dish.save(dish66);

    const dish67: Dish = new Dish();
    dish67.fullname_es = 'Gambas al ajillo';
    dish67.fullname_en = 'Shrimps with garlic';
    dish67.description = 'Gambas al ajillo';
    dish67.prize = 10.00;
    dish67.meal_category = mealCat6saved;
    await Dish.save(dish67);

    const dish68: Dish = new Dish();
    dish68.fullname_es = 'Pulpo a la gallega';
    dish68.fullname_en = 'Octopus with potatoes';
    dish68.description = 'Pulpo con patata panadera';
    dish68.prize = 18.00;
    dish68.meal_category = mealCat6saved;
    await Dish.save(dish68);

    const dish69: Dish = new Dish();
    dish69.fullname_es = 'Carpaccio de bacalao';
    dish69.fullname_en = 'Cod carpaccio';
    dish69.description = 'Carpaccio de bacalao';
    dish69.prize = 13.00;
    dish69.meal_category = mealCat6saved;
    await Dish.save(dish69);

    const dish610: Dish = new Dish();
    dish610.fullname_es = 'Callos';
    dish610.fullname_en = 'Callos';
    dish610.description = 'Callos';
    dish610.prize = 8.00;
    dish610.meal_category = mealCat6saved;
    await Dish.save(dish610);

    const dish611: Dish = new Dish();
    dish611.fullname_es = 'Mollejas';
    dish611.fullname_en = 'Mollejas';
    dish611.description = 'Mollejas';
    dish611.prize = 13.00;
    dish611.meal_category = mealCat6saved;
    await Dish.save(dish611);


    const dish612: Dish = new Dish();
    dish612.fullname_es = 'Tabla de embutidos';
    dish612.fullname_en = 'Raw sausages selection';
    dish612.description = 'Tabla de embutidos';
    dish612.prize = 18.00;
    dish612.meal_category = mealCat6saved;
    await Dish.save(dish612);


    const dish613: Dish = new Dish();
    dish613.fullname_es = 'Tabla de quesos';
    dish613.fullname_en = 'Cheese selection';
    dish613.description = 'Tabla de quesos';
    dish613.prize = 18.00;
    dish613.meal_category = mealCat6saved;
    await Dish.save(dish613);


    const dish614: Dish = new Dish();
    dish614.fullname_es = 'Croquetas de cecina';
    dish614.fullname_en = 'Jerky Croquettes';
    dish614.description = 'Croquetas de cecina';
    dish614.prize = 8.00;
    dish614.meal_category = mealCat6saved;
    await Dish.save(dish614);

    const dish615: Dish = new Dish();
    dish615.fullname_es = 'Croquetas de txangurro';
    dish615.fullname_en = 'Seafood Croquettes';
    dish615.description = 'Croquetas de txangurro';
    dish615.prize = 8.00;
    dish615.meal_category = mealCat6saved;
    await Dish.save(dish615);


    const mealCat7: MealCategory = new MealCategory();
    mealCat7.fullname_es = 'Ensaladas';
    mealCat7.fullname_en = 'Salads';
    mealCat7.time = 'Tardes';
    mealCat7.restaurant = seviSaved;
    const mealCat7saved: MealCategory = await MealCategory.save(mealCat7);

    const dish70: Dish = new Dish();
    dish70.fullname_es = 'Ensalada mixta';
    dish70.fullname_en = 'Homemade salad';
    dish70.description = 'Ensalada mixta de la casa: tomate, lechuga, cebolla, espárrago, bonito, huevo cocido y aceitunas';
    dish70.prize = 8.50;
    dish70.meal_category = mealCat7saved;
    await Dish.save(dish70);

    const dish71: Dish = new Dish();
    dish71.fullname_es = 'Ensalada de burrata';
    dish71.fullname_en = 'Burrata salad';
    dish71.description = 'Ensalada de burrata';
    dish71.prize = 9.00;
    dish71.meal_category = mealCat7saved;
    await Dish.save(dish71);

    const dish72: Dish = new Dish();
    dish72.fullname_es = 'Ensalada de aguacate';
    dish72.fullname_en = 'Avocado salad';
    dish72.description = 'Ensalada de aguacate: tomate, cebolla, aguacate curado con comino y limón';
    dish72.prize = 8.00;
    dish72.meal_category = mealCat7saved;
    await Dish.save(dish72);

    const dish73: Dish = new Dish();
    dish73.fullname_es = 'Ensaladilla rusa';
    dish73.fullname_en = 'Russian salad';
    dish73.description = 'Ensaladilla rusa';
    dish73.prize = 6.00;
    dish73.meal_category = mealCat7saved;
    await Dish.save(dish73);



  throw 'Population completed! You can kill this process.';

}).catch(error => console.log(error));
