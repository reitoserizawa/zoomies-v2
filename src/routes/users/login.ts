import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import User from '../../models/user';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            throw new Error('Missing username or password');
        }

        const user = await User.fromQuery('User', { username });
        const found_user = await user.login(password);

        const token = jwt.sign(user.prepareForCollection(), process.env.JWT_SECRET_KEY, {
            expiresIn: '2 days'
        });

        return { user: found_user.prepareForCollection(), token: token };
    } catch (err) {
        next(err);
    }
};
