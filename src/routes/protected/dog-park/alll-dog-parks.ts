import { NextFunction, Request, Response } from 'express';

import { DogParkInterface } from '../../../interfaces/dog-park';

import DogPark from '../../../models/dog-park';
import CheckIn from '../../../models/check-in';

export const getAllDogParks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dog_parks = await DogPark.getAll<DogParkInterface, DogPark>('dogPark');
        const response = await Promise.all(
            dog_parks.map(async dog_park => {
                const check_ins = await CheckIn.fromDogPark(dog_park);
                const active_check_ins_count = check_ins.filter(check_in => check_in.isActive()).length;

                return {
                    ...(await dog_park.prepareForCollection()),
                    active_check_ins_count
                };
            })
        );

        res.json(response);
    } catch (err) {
        next(err);
    }
};
