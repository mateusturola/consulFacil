import { Router } from "express";

import { TokenValidation } from "../../shared/middlewares";
import { InvoiceController } from "@modules/controller/invoice.controller";

const routesInvoice = Router();

const invoiceController = new InvoiceController();
const validation = new TokenValidation();


routesInvoice.get("/", invoiceController.getAll);

export default routesInvoice;
