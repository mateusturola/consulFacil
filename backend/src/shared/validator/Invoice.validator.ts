import { celebrate, Joi, Segments } from 'celebrate';

const invoiceValidator = celebrate({
  [Segments.BODY]: {
      patient: Joi.string().required(),
      amount: Joi.number().required(),
      date: Joi.date().required(),
  },
});

export default invoiceValidator
