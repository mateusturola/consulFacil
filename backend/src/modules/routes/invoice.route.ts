import { Router } from "express";

import { TokenValidation } from "../../shared/middlewares";
import { InvoiceController } from "@modules/controller/invoice.controller";
import invoiceValidator from "@shared/validator/Invoice.validator";

const routesInvoice = Router();

const invoiceController = new InvoiceController();
const validation = new TokenValidation();


routesInvoice.get("/", invoiceController.getAll);
routesInvoice.get("/filter", invoiceController.getByFilter);
routesInvoice.post("/", invoiceValidator, invoiceController.create);

export default routesInvoice;
