import express from 'express';
import * as Controller from '../../controllers/index.mjs';

export const router = express.Router();

const { AuthController } = Controller;

router.post("/login", AuthController.login);
router.post("/register", AuthController.registerUser);