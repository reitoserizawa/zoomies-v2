import { Response, NextFunction, CustomRequest, Request } from 'express';

import JWTUtils from '../utils/jwt';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = JWTUtils.decode(token);
        (req as CustomRequest).token = decoded;

        next();
    } catch (err) {
        console.log(err);
        res.status(401).send('Please authenticate');
    }
};
