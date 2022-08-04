import * as express from 'express';

import * as cors from 'cors';
import * as logger from 'morgan';

import { router } from './routes';

// Cria o app
export const app = express();

// configurações de middlewares

app.use(express.json()); // pra ele reconhecer os trem em formato json
app.use(cors()); // liberando os trem
app.use(logger('dev')); // gera log das reqs?

// Integra endpoint na app
app.use('/', router);






