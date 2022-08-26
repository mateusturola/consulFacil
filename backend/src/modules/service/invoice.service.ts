import { prismaClient } from '../database/prismaClient';
import AppError from '../../shared/errors/AppError';

export class InvoiceService {
    async create(invoice: any): Promise<any> {
        const { patient, amount, date,  paid} = invoice;
        const dateFormatted = new Date(date);

        const getPatient = await prismaClient.patients.findFirst({
            where: {
                name: patient,
            },
        });

        let patientId = getPatient?.id;

        if (!getPatient) {
            const patientCreated = await prismaClient.patients.create({
                data: {
                    name: patient,
                },
            });

            patientId = patientCreated?.id;
        }

        const invoiceCreated = await prismaClient.invoices.create({
            data: {
                patient: {
                    connect: {
                        id: patientId,
                    },
                },
                amount,
                date: dateFormatted,
            },
        });

        return invoiceCreated;
    }

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
