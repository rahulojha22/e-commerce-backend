import express from "express";
import * as Controller from '../../controllers/index.mjs';

export const UserRouter = express.Router();

const { UserRoleController } = Controller;

UserRouter.post("/create", UserRoleController.createUserRole);
UserRouter.post("/list", UserRoleController.getUserRoleList);