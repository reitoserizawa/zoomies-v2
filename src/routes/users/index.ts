import { Router } from 'express';
import { getUser } from './user-profile';

const userRoutes = Router();

userRoutes.get('/', getUser);

export default userRoutes;
