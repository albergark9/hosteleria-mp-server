import * as express from 'express';
import * as usersController from './restaurants.controller';

const restaurants: express.Router = express.Router();

restaurants.get('', usersController.getAllRestaurants);
restaurants.get('/:restaurant_name/all', usersController.getRestaurantMenu);

export default restaurants;
