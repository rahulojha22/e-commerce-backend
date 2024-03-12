import express from "express";
import { SidebarRouter } from "./sidebar.route.mjs";
import { UserRouter } from "./user.route.mjs";
import { UserRoleRouter } from "./user_role.route.mjs";
import { OrderRouter } from "./order.route.mjs";
import { PermissionRouter } from "./permission.route.mjs";
import { ProductRouter } from "./product.route.mjs";
import { StoreRouter } from "./store.route.mjs";
import { TokenRouter } from "./token.route.mjs";
import { UserCartRouter } from "./usercart.route.mjs";

export const AuthRouter = express.Router();

AuthRouter.use("/user", UserRouter);
AuthRouter.use("/token", TokenRouter);
AuthRouter.use("/user_role", UserRoleRouter);
AuthRouter.use("/sidebar", SidebarRouter);
AuthRouter.use("/order", OrderRouter);
AuthRouter.use("/permission", PermissionRouter);
AuthRouter.use("/product", ProductRouter);
AuthRouter.use("/store", StoreRouter);
AuthRouter.use("/user_cart", UserCartRouter);