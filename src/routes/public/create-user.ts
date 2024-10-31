import { NextFunction, Request, Response } from 'express';

import { UserCreateInterface } from '../../interfaces/user';

import User from '../../models/user';

import JWTUtil, { TokenPayload } from '../../utils/jwt';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, email } = req.body as UserCreateInterface;

        if (!username || !password || !email) {
            throw new Error('Missing required parameters');
        }

        const user: User = await User.create({
            email,
            username,
            password
        });
        const token = user.generateToken();

        res.json({ user: await user.prepareForCollection(), token });
    } catch (err) {
        next(err);
    }
};
