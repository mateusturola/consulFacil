import { Router } from 'express';
import routesUser from './user.route';
import routesLogin from './login.route';
import routesInvoice from './invoice.route';

const routes = Router();

routes.use('/user', routesUser);
routes.use('/login', routesLogin);
routes.use('/invoice', routesInvoice);

export default routes;