import { Request, NextFunction, Response } from 'express';
import { BasicError, NotFoundError, NoAccessError, BadRequestError, AuthError } from '../models/errors';

const errorHandler = (err: unknown, req: Request, res: Response) => {
    if (err instanceof BasicError || err instanceof NotFoundError || err instanceof NoAccessError || err instanceof BadRequestError || err instanceof AuthError) {
        const { status_code, message } = err;
        res.status(status_code).json({ error: { message } });
    } else if (typeof err === 'string') {
        res.status(500).json({ error: { message: err } });
    } else if (err instanceof Error) {
        console.log('\n\n\n********\n\nError caught in error handler (DUBUG REQUIRED):');
        console.error(err);
        console.log('\n********\n\n\n');
    }

    // unhandled errors
    res.status(500).json({ error: { message: 'Something went wrong' } });
};

export default errorHandler;
