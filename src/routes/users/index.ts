import { Router } from 'express';
import { getUser } from './user-profile';
import { attachPetToUser } from './attach-pet-to-user';

const userRoutes = Router();

userRoutes.get('/', getUser);
userRoutes.get('/attach-pet', attachPetToUser);

export default userRoutes;
