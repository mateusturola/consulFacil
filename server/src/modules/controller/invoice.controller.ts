import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { InvoiceService } from '../service/invoice.service';

export class InvoiceController {
    async create(req: Request, res: Response): Promise<Response> {
        const invoiceService = new InvoiceService();

        const invoice = await invoiceService.create(req.body);

        return res.status(StatusCodes.CREATED).json(invoice);
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        const invoiceService = new InvoiceService();

        const invoices = await invoiceService.getAll();

        return res.status(StatusCodes.OK).json(invoices);
    }

    async getByFilter(req: Request, res: Response): Promise<Response> {
        const invoiceService = new InvoiceService();

        const invoices = await invoiceService.getByFilter(req.query);

        return res.status(StatusCodes.OK).json(invoices);
    }
}