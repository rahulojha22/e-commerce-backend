import express from "express";
import * as Controller from '../../controllers/index.mjs';

export const UserRoleRouter = express.Router();

const { UserRoleController } = Controller;

UserRoleRouter.post('')