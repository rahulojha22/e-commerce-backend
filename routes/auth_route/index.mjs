import express from "express";
import { SidebarRouter } from "./sidebar.route.mjs";

export const AuthRouter = express.Router();

AuthRouter.use("/sidebar", SidebarRouter)