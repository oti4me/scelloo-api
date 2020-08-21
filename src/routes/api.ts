import { Router } from 'express';
import users from './users';

const apiRotuer = Router();

apiRotuer.use('/users', users);

export default apiRotuer;
