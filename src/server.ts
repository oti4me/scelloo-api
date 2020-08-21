import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import { errorHandler, notFound } from './middleware/error';
import api from './routes/api';

config();

const app = express();
const port: number = parseInt(process.env.PORT, 10) || 3001;

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', api);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});
