import { NextFunction, Request, Response } from 'express';

import User from '../../models/user';

import JWTUtil from '../../utils/jwt';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            throw new Error('Missing username or password');
        }

        const user = await User.fromQuery('User', { username });
        const found_user = await user.login(password);

        const token = JWTUtil.generate(await found_user.prepareForCollection());

        res.json({ user: await found_user.prepareForCollection(), token: token });
    } catch (err) {
        next(err);
    }
};
