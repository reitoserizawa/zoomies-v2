import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';

export const getPetsFromUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        user.setPets();

        res.json(await Promise.all((user?.pets || []).map(async pet => await pet.prepareForCollection())));
    } catch (err) {
        next(err);
    }
};
