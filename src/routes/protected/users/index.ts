import { Router } from 'express';

import { changePassword, deleteUser, getUserDetails, updateUserDetails } from './single-user';
import { deleteDogParkCheckIn, getRecentDogParkCheckIns } from './user-dog-park-check-in';
import { getPetsFromUser } from './user-pets';
import { addFavoriteDogPark, checkFavoriteDogParkStatus, deleteFavoriteDogPark, getFavoriteDogParks } from './user-favorite-dog-park';

const userRoutes = Router();

userRoutes.get('/', getUserDetails);
userRoutes.post('/', updateUserDetails);
userRoutes.delete('/', deleteUser);

userRoutes.post('/change-password', changePassword);

userRoutes.get('/pets', getPetsFromUser);

userRoutes.delete('/dog-park-check-ins', deleteDogParkCheckIn);

userRoutes.get('/recent-dog-park-check-ins', getRecentDogParkCheckIns);

userRoutes.get('/favorite-dog-parks', getFavoriteDogParks);
userRoutes.post('/favorite-dog-parks', addFavoriteDogPark);

userRoutes.delete('/favorite-dog-parks/:id', deleteFavoriteDogPark);

userRoutes.get('/favorite-dog-parks/dog-parks/:id', checkFavoriteDogParkStatus);

export default userRoutes;
