import { prismaClient } from '../database/prismaClient';
import AppError from '../../shared/errors/AppError';

export class InvoiceService
{
    async getAll()
    {
        const invoices = await prismaClient.invoices.findMany({
            select: {
                id: true,
                patient: {
                    select: {
                        name: true,
                    },
                },
                amount: true,
                date: true,
                paid: true,
            },
        });

        if (!invoices) throw new AppError('Nenhuma fatura encontrada', 404);

        return invoices;
    }
}
