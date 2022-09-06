import { celebrate, Joi, Segments } from 'celebrate';

export const invoiceValidator = celebrate({
  [Segments.BODY]: {
      patient: Joi.string().required(),
      amount: Joi.number().required(),
      date: Joi.date().required(),
  },
});

export const invoiceValidatorEdit = celebrate({
  [Segments.BODY]: {
    patient: Joi.string().required(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
    paid: Joi.boolean(),
  },
});

export default invoiceValidator
