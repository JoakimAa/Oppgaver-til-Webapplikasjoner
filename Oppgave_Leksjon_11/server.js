import express from 'express';
import morgan from 'morgan';
import connectDatabase from './config/db.js';
import user from './routes/user.js';
import poll from './routes/poll.js';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/error.js';

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/polls`, poll);
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
