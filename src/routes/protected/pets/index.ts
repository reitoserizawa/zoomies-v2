import { Router } from 'express';
import { createPet } from './all-pet';
import { updatePet } from './singe-pet';

const petRoutes = Router();

petRoutes.post('/', createPet);

petRoutes.post('/:id', updatePet);
petRoutes.delete('/:id', updatePet);

export default petRoutes;
