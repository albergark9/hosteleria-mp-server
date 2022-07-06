import * as express from 'express';
import * as usersController from './restaurants.controller';

const restaurants: express.Router = express.Router();

restaurants.get('', usersController.getAllRestaurants);

export default restaurants;
