import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';

export const createPet = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        await user.createPet(req.body);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
