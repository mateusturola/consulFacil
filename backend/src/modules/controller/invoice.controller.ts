import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { InvoiceService } from '../service/invoice.service';

export class InvoiceController {
    async getAll(req: Request, res: Response): Promise<Response> {
        const invoiceService = new InvoiceService();

        const invoices = await invoiceService.getAll();

        return res.status(StatusCodes.OK).json(invoices);
    }
}