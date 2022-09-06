import { Router } from "express";

import { TokenValidation } from "../../shared/middlewares";
import { InvoiceController } from "@modules/controller/invoice.controller";
import invoiceValidator from "@shared/validator/Invoice.validator";

const routesInvoice = Router();

const invoiceController = new InvoiceController();
const validation = new TokenValidation();


routesInvoice.get("/", validation.userRoute , invoiceController.getAll);
routesInvoice.get("/filter", validation.userRoute, invoiceController.getByFilter);
routesInvoice.post("/", validation.userRoute, invoiceValidator, invoiceController.create);

export default routesInvoice;
