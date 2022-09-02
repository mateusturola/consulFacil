import { prismaClient } from '../src/modules/database/prismaClient';
import argon2 from 'argon2';

async function createUser() {
  const hashedPassword = await argon2.hash('erica@odonto2022', { type: argon2.argon2d } );


  await prismaClient.user.createMany({
    data: [{
      name: 'Erica',
      email: 'erica.odonto@gmail.com',
      password: hashedPassword,
    },
    {
      name: 'Turola',
      email: 'turola@gmail.com',
      password: hashedPassword,
    }],
    skipDuplicates: true,
  });
}

async function createPatients() {
  const patients = [
    {
      name: 'Yuka Takei',
    },
    {
      name: 'Thávia Farias',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Michael Santos',
    },
  ];

  await prismaClient.patients.createMany({
    data: patients,
    skipDuplicates: true,
  });
}

async function createInvoices() {
  const invoices = [
    {
      patientId: 1,
      amount: 150,
      date: new Date('09-06-2022'),
      paid: false,
    },
    {
      patientId: 2,
      amount: 100,
      date: new Date('09-15-2022'),
      paid: false,
    },
    {
      patientId: 3,
      amount: 200,
      date: new Date('09-20-2022'),
      paid: false,
    },
    {
      patientId: 4,
      amount: 300,
      date: new Date('09-15-2022'),
      paid: false,
    },
    {
      patientId: 1,
      amount: 250,
      date: new Date('10-06-2022'),
      paid: false,
    },
    {
      patientId: 2,
      amount: 120,
      date: new Date('10-15-2022'),
      paid: false,
    },
    {
      patientId: 3,
      amount: 230,
      date: new Date('10-20-2022'),
      paid: false,
    },
    {
      patientId: 4,
      amount: 100,
      date: new Date('10-15-2022'),
      paid: false,
    }
  ];

  await prismaClient.invoices.createMany({
    data: invoices,
    skipDuplicates: true,
  });
}



async function main() {
  await createUser();
  await createPatients();
  await createInvoices();
}

main();
