import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UseRepository';
import { created } from '../helpers/response';

export class UsersController {
  /**
   * User repo instance variable
   *
   * @private
   * @type {UserRepository}
   * @memberOf UsersController
   */
  private userRepo: UserRepository;

  /**
   * Creates an instance of UsersController.
   *
   * @memberOf UsersController
   */
  constructor() {
    this.userRepo = new UserRepository();
  }

  /**
   * Creates a use account
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   *
   * @memberOf UsersController
   */
  public create = async (
    req: Request,
    res: Response,
    next: (error: any) => {}
  ) => {
    const [user, error] = await this.userRepo.create(req.body);
    if (error) return next(error);

    return created(res, user);
  };
}
