import { Router } from 'express';

import { getUser, updateUser } from './user-profile';

import petRoutes from './pets';

const userRoutes = Router();

userRoutes.get('/', getUser);
userRoutes.post('/', updateUser);

userRoutes.use('/pets', petRoutes);

export default userRoutes;
