import { Router } from 'express';

import { deleteUser, getUserDetails, updateUserProfile } from './single-user';
import { deleteCheckIn } from './user-check-in';
import { getPetsFromUser } from './user-pets';

const userRoutes = Router();

userRoutes.get('/', getUserDetails);
userRoutes.post('/', updateUserProfile);
userRoutes.delete('/', deleteUser);

userRoutes.get('/pets', getPetsFromUser);

userRoutes.delete('/check-ins', deleteCheckIn);

export default userRoutes;
