import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import { BadRequestError } from '../../../models/errors';

export const createPet = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        user.setPets();

        const { name } = req.body;

        const pets = user.pets;
        const has_duplicates = pets?.find(pet => pet.properties.name === name);

        if (has_duplicates) throw new BadRequestError('You already have a pet with the same name');

        const pet = await user.createPet(req.body);

        res.json(await pet.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
