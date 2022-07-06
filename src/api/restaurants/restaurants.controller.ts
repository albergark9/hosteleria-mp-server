import { Request, Response } from 'express';
import { Like } from 'typeorm';
import { Restaurant } from '../../models';
import { AppDataSource } from '../../index';

async function getAllRestaurants(req: Request, res: Response, next: any): Promise<Response> {

  // processing the request (authentication process finished)
  const [items, count]: [Restaurant[], number] = await Restaurant.findAndCount();

  if (count === 0) {
    return res.status(404).send({ message: "No restaurants found." });
  }

  return res.status(200).send(items);
}

async function getRestaurantMenu(req: Request, res: Response, next: any): Promise<Response> {
  if (req.params.restaurant_name === undefined) return res.status(400).send({ message: 'The restaurant field is empty.' });
  const restaurant_name: string = req.params.restaurant_name as string;

  var restaurant: Restaurant = await AppDataSource.getRepository(Restaurant)
  .createQueryBuilder("r")
  .leftJoinAndSelect("r.meal_categories", "meal_categories")
  .leftJoinAndSelect("meal_categories.dishes", "dishes")
  .where("name = :name", { name: restaurant_name })
  .getOne();
  
  if (!restaurant) return res.status(401).send({ message: 'resturant menu not found.' });

  return res.status(200).send({"restaurant":restaurant});
}

export {
  getAllRestaurants,
  getRestaurantMenu
};
