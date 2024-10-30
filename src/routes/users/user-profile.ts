import { CustomRequest, NextFunction, Response } from 'express';
import User from '../../models/user';

import JWTUtil from '../../utils/jwt';

export const getUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error('Token not found');
        }

        const decoded = JWTUtil.decode(token);

        next();
    } catch (err) {
        next(err);
    }
};
