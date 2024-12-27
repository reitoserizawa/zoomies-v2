import { Request, NextFunction, Response, CustomRequest } from 'express';
import { BasicError, NotFoundError, NoAccessError, BadRequestError, AuthError } from '../models/errors';

const errorHandler = (err: unknown, req: Request | CustomRequest, res: Response, next: NextFunction) => {
    try {
        if (err instanceof BasicError || err instanceof NotFoundError || err instanceof NoAccessError || err instanceof BadRequestError || err instanceof AuthError) {
            const { status_code, message } = err;
            res.status(status_code).json(message);
        } else if (typeof err === 'string') {
            res.status(500).json(err);
        } else if (err instanceof Error) {
            console.log('\n\n\n********\n\nError caught in error handler:');
            console.error({ error: err });
            console.log('\n********\n\n\n');
        }
        // unhandled errors
        res.status(500).json('Something went wrong');
    } catch (err) {
        // *: unknon error can hapen from the code above
        return;
    }
};

export default errorHandler;
