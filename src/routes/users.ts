import { Router } from 'express';
import { userValidation } from '../middleware/userValidation';
import { UsersController } from '../controllers/UsersController';

const usersRoutes = Router();
const usersController = new UsersController();
const {
  createValidator,
  createValidationResult,
  updateValidationResult,
  updateValidator,
} = userValidation;

usersRoutes.post(
  '/',
  createValidator,
  createValidationResult,
  usersController.create
);

usersRoutes.put(
  '/:id',
  updateValidator,
  updateValidationResult,
  usersController.edit
);

usersRoutes.delete('/:id', usersController.delete);

export default usersRoutes;
