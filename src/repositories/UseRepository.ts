import { User } from '../models/User';
import { Conflict } from '../utils/errors/Conflict';
import { NotFound } from '../utils/errors/NotFound';

export class UserRepository {
  /**
   * Adds a user record to database
   *
   * @param {*} userDetails
   * @returns
   *
   * @memberOf UserRepository
   */
  public async create(userDetails: { [key: string]: any }) {
    try {
      const exists = await User.findOne({
        where: { email: userDetails.email },
      });

      if (exists) {
        if (exists.email === userDetails.email) {
          return [
            null,
            new Conflict(
              `A user with the email '${userDetails.email}' already exists`
            ),
          ];
        }
      }

      const user = await User.create(userDetails);

      return [user, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Update a user's record on the database
   *
   * @param {*} userDetails
   * @returns
   *
   * @memberOf UserRepository
   */
  public async update(id: number, userDetails: { [key: string]: any }) {
    const user = await User.findByPk(id);

    if (!user) {
      return [null, new NotFound(`User not found`)];
    }

    try {
      const updatedUser = await user.update(userDetails);
      return [updatedUser, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Deletes a user record from the database
   *
   * @param {number} id
   * @returns
   *
   * @memberOf UserRepository
   */
  public async delete(id: number) {
    const user = await User.findByPk(id);

    if (!user) {
      return [null, new NotFound(`User not found`)];
    }

    try {
      await user.destroy();
      return [{ message: 'User deleted!' }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Gets a single user record from the database
   *
   * @param {number} id
   * @returns
   *
   * @memberOf UserRepository
   */
  public async one(id: number) {
    try {
      const user = await User.findByPk(id);

      if (!user) {
        return [null, new NotFound(`User not found`)];
      }

      return [user, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Get all users from the database
   *
   * @returns
   *
   * @memberOf UserRepository
   */
  public async all() {
    try {
      const users = await User.findAll();

      return [users, null];
    } catch (error) {
      return [null, error];
    }
  }
}
