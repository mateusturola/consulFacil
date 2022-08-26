import { Router } from "express";

import { UserController } from "../controller/user.controller";
import loginUserValidator from "../../shared/validator/login.validator";

const routesLogin = Router();

const userController = new UserController();


routesLogin.post("/", loginUserValidator, userController.login);

export default routesLogin;
