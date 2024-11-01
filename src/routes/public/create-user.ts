import { NextFunction, Request, Response } from 'express';

import User from '../../models/user';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, email } = req.body;

        if (!username || typeof username !== 'string') {
            throw new Error('Username is not valid');
        }

        if (!password || typeof password !== 'string') {
            throw new Error('Username is not valid');
        }

        if (!email || typeof email !== 'string') {
            throw new Error('Username is not valid');
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
