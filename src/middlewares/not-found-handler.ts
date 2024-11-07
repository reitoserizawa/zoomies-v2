import { CustomRequest, NextFunction, Request, Response } from 'express';

import { NotFoundError } from '../models/errors';

export const notFoundHandler = (err: unknown, req: Request | CustomRequest, res: Response, next: NextFunction) => {
    if (err) {
        next(err);
    }
    next(new NotFoundError('Resource not found'));
};
