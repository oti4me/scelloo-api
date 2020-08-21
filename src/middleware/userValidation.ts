import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import { ValidationError } from '../utils/errors/ValidationError';

export const userValidation = {
  /**
   * Checks for validation result, returns next of successful
   *
   * @param {Request} req
   * @param {Response} res
   * @param {() => {}} next
   * @returns
   */
  createValidationResult: (req: Request, res: Response, next) => {
    const { fname, lname, email, phone } = req.body;
    const result = validationResult(req);

    if (!result.isEmpty()) return next(new ValidationError(result.array()));

    req.body = {
      fname,
      lname,
      email,
      phone,
    };

    return next();
  },

  createValidator: [
    check('fname')
      .optional(false)
      .isLength({ min: 3, max: 25 })
      .withMessage('First nane must be 3-25 chars long'),
    check('lname')
      .optional(false)
      .isLength({ min: 3, max: 25 })
      .withMessage('Last nane must be 3-25 chars long'),
    check('email').isEmail().withMessage('Invalid email'),
    check('phone')
      .optional(true)
      .isMobilePhone('en-NG')
      .withMessage('Invalid mobile number'),
  ],
};
