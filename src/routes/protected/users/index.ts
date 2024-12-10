import { Router } from 'express';

import { deleteUser, getUserDetails, updateUserProfile } from './single-user';
import { deleteDogParkCheckIn } from './user-dog-park-check-in';
import { getPetsFromUser } from './user-pets';
import { addFavoriteDogPark, deleteFavoriteDogPark } from './user-favorite-dog-park';

const userRoutes = Router();

userRoutes.get('/', getUserDetails);
userRoutes.post('/', updateUserProfile);
userRoutes.delete('/', deleteUser);

userRoutes.get('/pets', getPetsFromUser);

userRoutes.delete('/check-ins', deleteDogParkCheckIn);

userRoutes.post('/favorite-parks', addFavoriteDogPark);
userRoutes.delete('/favorite-parks', deleteFavoriteDogPark);

export default userRoutes;
