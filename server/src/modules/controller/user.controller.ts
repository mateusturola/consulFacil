import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../service/user.service';

export class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const userService = new UserService();

    const newUser = await userService.create(name, email, password);

    return res.status(StatusCodes.CREATED).json(newUser);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const userService = new UserService();

    const token = await userService.login(email, password);

    return res.status(StatusCodes.OK).json({token})
  }
}