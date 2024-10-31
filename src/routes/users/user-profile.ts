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
