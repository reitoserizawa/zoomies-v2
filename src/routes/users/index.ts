import { Router } from 'express';
import { createUser } from './all-users';
import { getUser } from './single-user';

const userRoutes = Router();

userRoutes.get('/', getUser);
userRoutes.post('/', createUser);

export default userRoutes;
