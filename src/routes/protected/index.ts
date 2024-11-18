import { Router } from 'express';

import userRoutes from './users';
import petRoutes from './pets';
import dogParkRoutes from './dog-park';

const protetdRoutes = Router();

protetdRoutes.use('/users', userRoutes);
protetdRoutes.use('/pets', petRoutes);
protetdRoutes.use('/dog-parks', dogParkRoutes);

export default protetdRoutes;
