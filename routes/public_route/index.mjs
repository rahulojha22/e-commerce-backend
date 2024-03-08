import express from 'express';
import {router} from './auth.route.mjs';

export const pub_router = express.Router();

pub_router.use('/auth', router)