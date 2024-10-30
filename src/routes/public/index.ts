import { Router } from 'express';
import { login } from './login';
import { createUser } from './create-user';

const publicRoutes = Router();

publicRoutes.post('/login', login);
publicRoutes.post('/create-user', createUser);

export default publicRoutes;
