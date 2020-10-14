import express from 'express';
import errorHandler from './errors/handler';
import cors from 'cors';

import './database/connection';
import 'express-async-errors';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.use(cors());

app.listen(3333);
