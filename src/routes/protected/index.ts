import { Router } from 'express';

import userRoutes from './users';
import petRoutes from './pets';

const protetdRoutes = Router();

protetdRoutes.use('/users', userRoutes);
protetdRoutes.use('/pets', petRoutes);

export default protetdRoutes;
