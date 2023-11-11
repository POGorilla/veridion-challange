import dotenv from 'dotenv'
dotenv.config();
import 'express-async-errors'
import express from 'express'
import version1Router from './versions/v1/api-v1.js';
import morgan from 'morgan'
import cors from 'cors';
import RateLimit from 'express-rate-limit';
import { notFoundMiddleware } from './middleware/notFound.js';
import { errorHandlerMiddleware } from './middleware/error.js';

const app = express();

app.set('trust proxy', 1);
app.use(cors({
  origin: '*'
}));
app.use(RateLimit({
  windowMs: 100 * 60 * 15,
  max: 1000,
  standardHeaders: true,
  message: `<h1 style='display:flex; align-items:center; justify-content:center; height:100vh'>
    429 - Too many Requests <br> Try again later!
  </h1>`,
}));

app.use(express.json());
app.use(morgan('common'));
app.use('/api/v1', version1Router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;