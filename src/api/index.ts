import * as express from 'express';
import restaurants from './restaurants';

const api: express.Router = express.Router();

api.use('/restaurants', restaurants);

export default api;
