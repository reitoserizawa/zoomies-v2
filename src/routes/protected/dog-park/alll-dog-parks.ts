import { NextFunction, Request, Response } from 'express';

import { DogParkInterface } from '../../../interfaces/dog-park';

import DogPark from '../../../models/dog-park';
import DogParkCheckIn from '../../../models/dog-park-check-in';

export const getAllDogParks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dog_parks = await DogPark.getAll<DogParkInterface, DogPark>('dogPark');
        const response = await Promise.all(
            dog_parks.map(async dog_park => {
                dog_park.setAddress();

                const check_ins = await DogParkCheckIn.fromDogPark(dog_park);
                const most_recent_check_in = await DogParkCheckIn.mostRecentfromDogPark(dog_park);
                const active_check_ins_count = check_ins.filter(check_in => check_in.isActive()).length;

                return {
                    ...(await dog_park.prepareForCollection()),
                    address: await dog_park.address?.prepareForCollection(),
                    active_check_ins_count,
                    most_recent_check_in: await most_recent_check_in?.prepareForCollection()
                };
            })
        );

        res.json(response);
    } catch (err) {
        next(err);
    }
};
