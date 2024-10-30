import { NextFunction, Request, Response } from 'express';

import { UserCreateInterface } from '../../interfaces/user';

import User from '../../models/user';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, email } = req.body as UserCreateInterface;

        if (!username || !password || !email) {
            throw new Error('Missing required parameters');
        }

        const user = await User.create({
            email,
            username,
            password
        });

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};
