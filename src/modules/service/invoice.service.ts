import { prismaClient } from '../database/prismaClient';
import AppError from '../../shared/errors/AppError';
import IFilter from '../../shared/InterFace/IFilter';

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

        await prismaClient.invoices.create({
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

        const getAllInvoices = await this.getAll();

        return getAllInvoices;
    }

    async getAll(){
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

    async getByFilter(filter: any){
        const filterParams: IFilter = {} as IFilter;

        if(filter.patient) {
            filterParams.patient = {
                name: {
                    contains: filter.patient,
                }
            }
        }

        if(filter.finalDate && filter.initialDate) {
            filterParams.date = {
                gte: filter.initialDate ? new Date(filter.initialDate) : new Date(),
                lte: new Date(filter.finalDate),
            }
        }

        if(filter.initialDate && !filter.finalDate) {
            filterParams.date = {
                gte: filter.initialDate,
            }
        }

        if(filter.finalDate && !filter.initialDate) {
            filterParams.date = {
                lte: filter.finalDate,
            }
        }

        const invoices = await prismaClient.invoices.findMany({
            where: filterParams,
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


        if (invoices.length === 0) throw new AppError('Nenhuma fatura encontrada', 404);

        return invoices;
    }

    async getById(id: number){
        const invoice = await prismaClient.invoices.findUnique({
            where: {
                id: id,
            },
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

        if (!invoice) throw new AppError('Nenhuma fatura encontrada', 404);

        return invoice;
    }

    async update(id:number ,invoice: any){
        const { patient, amount, date, paid } = invoice;


        const dateFormatted = new Date(date);

        const getInvoice = await this.getById(id);


        if (!getInvoice) throw new AppError('Nenhuma fatura encontrada', 404);

        const verifyPaid = paid === undefined ? getInvoice.paid : paid;

        const getPatient = await prismaClient.patients.findFirst({
            where: {
                name: patient,
            },
            select: {
                id: true,
            },
        });


        await prismaClient.invoices.update({
            where: {
                id,
            },
            data: {
                patientId: getPatient?.id,
                amount,
                date: dateFormatted,
                paid: verifyPaid,
            },
        });

        const getAllInvoices = await this.getAll();

        return getAllInvoices;
    }

    async delete(id: number){
        const invoice = await this.getById(id);

        if (!invoice) throw new AppError('Nenhuma fatura encontrada', 404);

        await prismaClient.invoices.delete({
            where: {
                id,
            },
        });

        const getAllInvoices = await this.getAll();

        return getAllInvoices;
    }
}
