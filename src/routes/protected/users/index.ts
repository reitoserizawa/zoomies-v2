import { Router } from 'express';

import { deleteUser, getUserDetails, updateUserProfile } from './single-user';

const userRoutes = Router();

userRoutes.get('/', getUserDetails);
userRoutes.post('/', updateUserProfile);
userRoutes.delete('/', deleteUser);

export default userRoutes;
