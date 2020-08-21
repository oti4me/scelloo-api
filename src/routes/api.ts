import { Router } from 'express';

const apiRotuer = Router();

apiRotuer.get('/', (req, res) => {
  res.status(200).json({
    message:
      'Welcome to the API, Please consult the API documentation for more info',
  });
});

export default apiRotuer;
