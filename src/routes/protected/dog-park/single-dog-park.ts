import { NextFunction, Request, Response } from 'express';

import DogPark from '../../../models/dog-park';
import { BadRequestError } from '../../../models/errors';

export const getDogParkDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dog_park_id = parseInt(id);

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalida dog park ID');

        const dog_park = await DogPark.fromId(dog_park_id);

        res.json(await dog_park.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
