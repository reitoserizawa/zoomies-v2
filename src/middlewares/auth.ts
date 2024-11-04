import { Response, NextFunction, CustomRequest, Request } from 'express';

import JWTUtils from '../utils/jwt';
import { AuthError, BadRequestError } from '../models/errors';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) throw new BadRequestError('Token not found');

        const decoded = JWTUtils.decode(token);

        if (!decoded) throw new AuthError();

        (req as CustomRequest).token = decoded;

        next();
    } catch (err) {
        next(err);
    }
};
