import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import { BadRequestError } from '../../../models/errors';

export const getUserDetails = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};

export const updateUserDetails = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        const payload = user.validate(req.body);

        await user.update(payload);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};

export const changePassword = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        const { current_password, new_password } = req.body;

        if (!current_password || !new_password || typeof current_password !== 'string' || typeof new_password !== 'string') throw new BadRequestError('Invalid user password');

        await user.changePassword(current_password, new_password);

        res.json(await user.prepareForCollection());
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);

        await user.delete();

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};
