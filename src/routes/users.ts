import { Router } from 'express';
import { userValidation } from '../middleware/userValidation';
import { UsersController } from '../controllers/UsersController';

const usersRoutes = Router();
const usersController = new UsersController();
const { createValidator, createValidationResult } = userValidation;

usersRoutes.post(
  '/',
  createValidator,
  createValidationResult,
  usersController.create
);

export default usersRoutes;
