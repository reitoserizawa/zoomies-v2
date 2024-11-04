import { NextFunction, Request, Response } from 'express';

import DogPark from '../../../models/dog-park';

export const getDogParkDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id: dog_park_id } = req.params;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new Error();

        const dog_park = await DogPark.fromId(dog_park_id);

        res.json(await dog_park.prepareForCollection());
    } catch (err) {
        next(err);
    }
};