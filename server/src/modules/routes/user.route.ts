import { Router } from "express";

import { UserController } from "../controller/user.controller";
import createUserValidator from "../../shared/validator/user.validator";

const routesUser = Router();

const userController = new UserController();


routesUser.post("/", createUserValidator, userController.create);

export default routesUser;
