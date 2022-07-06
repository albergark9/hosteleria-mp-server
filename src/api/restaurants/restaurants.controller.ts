import { Request, Response } from 'express';
import { Like } from 'typeorm';
import { Restaurant } from '../../models';

// get every user in the database
async function getAllRestaurants(req: Request, res: Response, next: any): Promise<Response> {

  // processing the request (authentication process finished)
  const [items, count]: [Restaurant[], number] = await Restaurant.findAndCount();

  if (count === 0) {
    return res.status(404).send({ message: "No restaurants found." });
  }

  return res.status(200).send(items);
}

export {
  getAllRestaurants
};
