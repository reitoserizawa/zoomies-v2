import { NextFunction, Request, Response, Router } from 'express';

import userRoutes from './users';

const routes = Router();

routes.get('', (req: Request, res: Response, next: NextFunction) => {
    res.json('Hello');
});

routes.use('/users', userRoutes);

export default routes;
