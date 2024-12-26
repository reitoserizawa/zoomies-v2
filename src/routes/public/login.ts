import { NextFunction, Request, Response } from 'express';

import User from '../../models/user';
import { BadRequestError } from '../../models/errors';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        if (!username || typeof username !== 'string') throw new BadRequestError('Invalid username');
        if (!password || typeof password !== 'string') throw new BadRequestError('Invalid password');

        const user = await User.fromUsername(username);

        if (!user) throw new BadRequestError('User does not exist');

        const matched_user = await user.login(password);
        const token = matched_user.generateToken();

        res.json({ user: await matched_user.prepareForCollection(), token });
    } catch (err) {
        next(err);
    }
};
