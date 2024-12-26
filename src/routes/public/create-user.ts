import { NextFunction, Request, Response } from 'express';

import User from '../../models/user';
import { BadRequestError } from '../../models/errors';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, email, first_name, last_name } = req.body;

        if (!username || typeof username !== 'string') throw new BadRequestError('Username is not valid');
        if (!password || typeof password !== 'string') throw new BadRequestError('Username is not valid');
        if (!email || typeof email !== 'string') throw new BadRequestError('Username is not valid');
        if (!first_name || typeof first_name !== 'string') throw new BadRequestError('First name is not valid');
        if (!last_name || typeof last_name !== 'string') throw new BadRequestError('Last name is not valid');

        const existing_email_user = await User.fromEmail(email);
        if (existing_email_user) throw new BadRequestError('Email is already in use');

        const existing_username_user = await User.fromUsername(username);
        if (existing_username_user) throw new BadRequestError('Username is already in use');

        const user: User = await User.create(req.body);
        const token = user.generateToken();

        res.json({ user: await user.prepareForCollection(), token });
    } catch (err) {
        next(err);
    }
};
