import { User } from '../models/User';
import { Conflict } from '../utils/errors/Conflict';

export class UserRepository {
  /**
   * Adds a user record to database
   *
   * @param {*} userDetails
   * @returns
   *
   * @memberOf UserRepository
   */
  public async create(userDetails: any) {
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
}
