import { OK, CREATED } from 'http-status-codes';
import { Response } from 'express';

/**
 * Returns a json response with status code 201 and a reponse body
 *
 * @param {any} res
 * @param {any} body
 */
export const created = (res: Response, payload: { [key: string]: any }) => {
  res.status(CREATED).json({
    status: 'Success',
    payload,
  });
};

/**
 * Returns a json response with status code 200 and a response body
 *
 * @param {any} res
 * @param {any} body
 */
export const ok = (
  res: Response,
  payload: { [key: string]: any },
  status: boolean = true
) => {
  const body = status
    ? {
        status: 'Success',
        payload,
      }
    : payload;

  res.status(OK).json(body);
};
