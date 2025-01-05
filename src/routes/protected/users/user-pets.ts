import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import DogParkCheckIn from '../../../models/dog-park-check-in';

export const getPetsFromUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        user.setPets();

        const response = await Promise.all(
            (user?.pets || []).map(async pet => {
                const active_check_in = await DogParkCheckIn.activeFromPet(pet);

                return {
                    ...(await pet.prepareForCollection()),
                    active_check_in: await active_check_in?.prepareForCollection()
                };
            })
        );

        res.json(response);
    } catch (err) {
        next(err);
    }
};
