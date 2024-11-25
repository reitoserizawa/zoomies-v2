import { Router } from 'express';

import { deleteUser, getUserDetails, updateUserProfile } from './single-user';
import { deleteCheckIn } from './user-check-in';

const userRoutes = Router();

userRoutes.get('/', getUserDetails);
userRoutes.post('/', updateUserProfile);
userRoutes.delete('/', deleteUser);

userRoutes.delete('/check-ins', deleteCheckIn);

export default userRoutes;
