import { CustomRequest, NextFunction, Response } from 'express';
import User from '../../../models/user';
import Pet from '../../../models/pet';

export const updatePet = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id: pet_id } = req.query;

        const user = await User.fromJwtPayload(req);

        if (!pet_id || typeof pet_id !== 'number') {
            throw new Error(`Invalid Pet ID`);
        }

        const pet = await Pet.fromId(pet_id);
        const user_owns_pet = user.ownsPet(pet);

        if (!user_owns_pet) {
            throw new Error("You don't own this pet");
        }

        await pet.update(req.body);

        res.json(await pet.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
