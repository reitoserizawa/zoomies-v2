import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../models/user';
import Pet from '../../models/pet';

export const attachPetToUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);

        const pet = await Pet.create(req.body, user);

        res.json(await pet.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
