import express from 'express';
import connectDatabase from './config/db.js';
import user from './routes/user.js'

import {PORT} from './constants/index.js';
import 'dotenv/config.js';
import morgan from 'morgan';

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

app.use(`${process.env.BASEURL}/users`, user);

connectDatabase();

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

