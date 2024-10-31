import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../models/user';
import Pet from '../../models/pet';

export const attachPetToUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        const owner_id = user.id;

        const { name } = req.body;

        if (!name || typeof name !== 'string') {
            throw new Error();
        }

        const pet = await Pet.create({ name, owner: { connect: { id: owner_id } } });

        res.json(await pet.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
