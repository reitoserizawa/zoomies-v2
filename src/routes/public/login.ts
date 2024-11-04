import { NextFunction, Request, Response } from 'express';

import User from '../../models/user';
import { BadRequestError } from '../../models/errors';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        if (!username || typeof username !== 'string') throw new BadRequestError('Invalid username');
        if (!password || typeof password !== 'string') throw new BadRequestError('Invalid password');

        const user = await User.fromUsername(username);
        const found_user = await user.login(password);

        const token = found_user.generateToken();

        res.json({ user: await found_user.prepareForCollection(), token });
    } catch (err) {
        next(err);
    }
};
