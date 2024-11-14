import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import Pet from '../../../models/pet';
import { BadRequestError, NoAccessError } from '../../../models/errors';

export const updatePetProfile = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const pet_id = parseInt(id);

        if (!pet_id || typeof pet_id !== 'number') throw new BadRequestError(`Invalid pet ID`);

        const user = await User.fromJwtPayload(req);

        const pet = await Pet.fromId(pet_id);
        const user_owns_pet = user.ownsPet(pet);

        if (!user_owns_pet) throw new NoAccessError("You don't own this pet");

        await pet.update(req.body);

        res.json(await pet.prepareForCollection());
    } catch (err) {
        next(err);
    }
};

export const deletePet = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const pet_id = parseInt(id);

        if (!pet_id || typeof pet_id !== 'number') throw new BadRequestError(`Invalid pet ID`);

        const user = await User.fromJwtPayload(req);

        const pet = await Pet.fromId(pet_id);
        const user_owns_pet = user.ownsPet(pet);

        if (!user_owns_pet) throw new NoAccessError("You don't own this pet");

        await pet.delete();

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};
