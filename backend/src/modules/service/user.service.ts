import { prismaClient } from '../database/prismaClient';
import jwt from 'jsonwebtoken';
import { privateKey } from '../../shared/config/jwt/readKey';
import AppError from '../../shared/errors/AppError';
import argon2 from 'argon2';

export class UserService {
  async create(name: string, email: string, password: string) {
    const userExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) throw new AppError('Email já cadastrado', 400);

    const hashedPassword = await argon2.hash(password);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new AppError('Usuário não encontrado', 401);

    if (await argon2.verify(user.password, password)) {
      const token = jwt.sign({ userId: user.id, name: user.name }, 'secret');
      return token;
    } else {
      throw new AppError('Senha incorreta', 401);
    }
  }
}
