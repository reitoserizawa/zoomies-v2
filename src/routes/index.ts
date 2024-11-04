import { Router } from 'express';

import publicRoutes from './public';
import protetdRoutes from './protected';

import { auth } from '../middlewares/auth';

const routes = Router();

routes.use('/public', publicRoutes);
routes.use('/users', auth, protetdRoutes);

export default routes;
