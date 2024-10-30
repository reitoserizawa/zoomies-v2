import { NextFunction, Request, Response } from 'express';
import User from '../../models/user';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = 1;

        const user = await User.fromId(id);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
