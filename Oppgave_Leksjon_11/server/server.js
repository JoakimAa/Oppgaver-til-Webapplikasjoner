import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDatabase from './config/db.js';

import user from './routes/user.js';
import poll from './routes/poll.js';
import auth from './routes/auth.js';

import { PORT, corsOptionsAllowedAll } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/error.js';

const app = express();

app.use(express.json());
app.use(cors(corsOptionsAllowedAll));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/polls`, poll);
app.use(`${process.env.BASEURL}/`, auth);

app.use(errorMiddleware);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`error: ${err.message}`);
  console.log(`Shutting down due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
