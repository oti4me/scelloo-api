import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UseRepository';
import { created, ok } from '../helpers/response';

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

  /**
   * Edits a use
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   *
   * @memberOf UsersController
   */
  public edit = async (
    req: Request,
    res: Response,
    next: (error: any) => {}
  ) => {
    const [user, error] = await this.userRepo.update(
      parseInt(req.params.id),
      req.body
    );

    if (error) return next(error);

    return ok(res, { message: 'Updated!!', user });
  };

  /**
   * Delets a use
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   *
   * @memberOf UsersController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: (error: any) => {}
  ) => {
    const [result, error] = await this.userRepo.delete(parseInt(req.params.id));

    if (error) return next(error);

    return ok(res, { message: result.message });
  };
}
