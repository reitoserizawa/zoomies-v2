import { Router } from 'express';

import { getUser, updateUser } from './single-user';

const userRoutes = Router();

userRoutes.get('/', getUser);
userRoutes.post('/', updateUser);

export default userRoutes;
