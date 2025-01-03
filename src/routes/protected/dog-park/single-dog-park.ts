import { NextFunction, Request, Response } from 'express';

import DogPark from '../../../models/dog-park';
import DogParkCheckIn from '../../../models/dog-park-check-in';
import { BadRequestError } from '../../../models/errors';

export const getDogParkDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dog_park_id = parseInt(id);

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalida dog park ID');

        const dog_park = await DogPark.fromId(dog_park_id);
        const most_recent_check_in = await DogParkCheckIn.mostRecentfromDogPark(dog_park);

        res.json({ ...(await dog_park.prepareForCollection()), most_recent_check_in: await most_recent_check_in?.prepareForCollection() });
    } catch (err) {
        next(err);
    }
};
