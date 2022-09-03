import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { publicKey } from '@shared/config/jwt/readKey';
import AppError from '@shared/errors/AppError';
import { UserService } from '@modules/service/user.service';
import IUser from '@shared/InterFace/IUser';



interface RequestToken extends Request {
  user: IUser;
}

export default class TokenValidation {
  async userRoute(req: RequestToken, _res: Response, next: NextFunction) {
    const user = new UserService();
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer', '').trim() || '';
    try {

      const payload = jwt.verify(token, publicKey, {
        algorithms: ['RS256'],
      });

      const userData = await user.findById(Number(payload.sub));

      if (userData === undefined) throw new AppError('Token inválido', 403);

      req.user = userData;

      next();
    } catch (error: any) {
      throw new AppError(error.message, 400);
    }
  }
}
