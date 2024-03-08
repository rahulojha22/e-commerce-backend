import express from "express";
import * as Controller from '../../controllers/index.mjs';

export const SidebarRouter = express.Router();

const { SidebarController } = Controller;

SidebarRouter.post("/create", SidebarController.createSidebarMenu);
SidebarRouter.post("/list", SidebarController.getSidebarMenuList);
SidebarRouter.post("/user_list", SidebarController.getSidebarMenuList);