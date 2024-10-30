import { Router } from 'express';

import userRoutes from './users';
import publicRoutes from './public';

import { auth } from '../middlewares/auth';

const routes = Router();

routes.use('/public', publicRoutes);
routes.use('/users', auth, userRoutes);

export default routes;
