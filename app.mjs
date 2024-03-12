import express from 'express';
import cors from 'cors';
import { pub_router } from './routes/public_route/index.mjs';
import { AuthRouter } from './routes/auth_route/index.mjs';
import bodyParser from 'body-parser';

export const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use('/hom', Service.tokenService1.generateToken);
app.use('/pub', pub_router);
app.use('/auth', AuthRouter);