import { Router } from 'express';
import { createPet } from './create-pet';
import { updatePet } from './pet-profile';

const petRoutes = Router();

petRoutes.post('/', createPet);

petRoutes.post('/:id', updatePet);
petRoutes.delete('/:id', updatePet);

export default petRoutes;
