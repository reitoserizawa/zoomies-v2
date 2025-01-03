import { Router } from 'express';
import { getAllDogParks } from './alll-dog-parks';
import { getDogParkDetails } from './single-dog-park';
import { createDogParkCheckIns, getActiveDogParkCheckIns, getPastDogParkCheckIns } from './dog-park-check-in';

const dogParkRoutes = Router();

dogParkRoutes.get('/', getAllDogParks);
dogParkRoutes.get('/:id', getDogParkDetails);

dogParkRoutes.post('/:id/check-ins', createDogParkCheckIns);
dogParkRoutes.get('/:id/active-check-ins', getActiveDogParkCheckIns);
dogParkRoutes.get('/:id/past-check-ins', getPastDogParkCheckIns);
// dogParkRoutes.delete('/:id/check-ins', deleteCheckIn);

export default dogParkRoutes;
