import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import Pet from '../../../models/pet';

export const getUncheckedInPets = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        user.setPets();

        const pets: Pet[] = user?.pets || [];
        const pets_without_active_check_ins = await Promise.all(
            pets.map(async pet => {
                const has_active_check_in = await pet.hasActiveDogParkCheckIn();
                return { pet, has_active_check_in };
            })
        );

        const filtered_pets = pets_without_active_check_ins.filter(result => !result.has_active_check_in).map(result => result.pet);

        res.json(await Promise.all(filtered_pets.map(pet => pet.prepareForCollection())));
    } catch (err) {
        next(err);
    }
};
