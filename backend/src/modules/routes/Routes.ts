import { Router } from 'express';
import routesUser from './user.route';
import routesLogin from './login.route';

const routes = Router();

routes.use('/user', routesUser);
routes.use('/login', routesLogin);

export default routes;