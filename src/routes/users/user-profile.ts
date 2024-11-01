import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../models/user';
import Pet from '../../models/pet';

export const getUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        const payload = user.validate(req.body);

        await user.update(payload);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
