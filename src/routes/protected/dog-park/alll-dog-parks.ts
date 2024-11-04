import { NextFunction, Request, Response } from 'express';

import { DogParkInterface } from '../../../interfaces/dog-park';

import DogPark from '../../../models/dog-park';

export const getAllDogParks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dog_parks = await DogPark.getAll<DogParkInterface, DogPark>('dogPark');

        res.json(await Promise.all(dog_parks.map(async dog_park => await dog_park.prepareForCollection())));
    } catch (err) {
        next(err);
    }
};
