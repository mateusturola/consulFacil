import { celebrate, Joi, Segments } from 'celebrate';

const loginUserValidator = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export default loginUserValidator;
