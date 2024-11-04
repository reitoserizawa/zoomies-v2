import { Router } from 'express';
import { createPet } from './all-pet';
import { deletePet, updatePetProfile } from './singe-pet';

const petRoutes = Router();

petRoutes.post('/', createPet);

petRoutes.post('/:id', updatePetProfile);
petRoutes.delete('/:id', deletePet);

export default petRoutes;
