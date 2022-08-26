import { Router } from "express";

import { UserController } from "./modules/controller/user.controller";
import createUserValidator from "./shared/validator/user.validator";
import loginUserValidator from "./shared/validator/login.validator";

const routes = Router();

const userController = new UserController();


routes.post("/users", createUserValidator, userController.create);
routes.post("/login", loginUserValidator, userController.login);

export { routes };
