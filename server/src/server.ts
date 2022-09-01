import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import ErrorHandler from './shared/errors/ErrorHandler';
import { errors } from 'celebrate';
import  routes from './modules/routes/Routes';

const app = express();

const PORT = process.env.APP_PORT || 3001;

app.use(express.json({limit: '1kb'}));

app.use(cors());

app.use(routes);

app.use(errors())

app.use(ErrorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
