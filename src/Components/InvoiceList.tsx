import InvoicesContext from "../Context/InvoicesContext";
import { useContext, useEffect } from "react";
import { formatDate } from "../Helpers";
import { styled } from "../../stitches.config";
import DeleteInvoices from "./invoiceAction/DeleteInvoices";
import EditInvoices from "./invoiceAction/EditInvoices";
import PaidInvoices from "./invoiceAction/PaidInvoices";

const InvoicesList =  styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
});

const CardInvoice = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'black',
    fontSize: '1.0rem',
    background: 'white',
    borderRadius: '4px',
    padding: '20px',
    gap: '10px',
    border: '1px solid #e6e6e6',
    width: '100%',
    '&:hover': {
      background: '#e6e6e6',
      border: '1px solid #cacaca',
    },
})

const InvoiceCardHeader = styled('h2', {
  fontSize: '1.1rem',
  textAlign: 'center',
  color: '#134559',
  fontWeight: '600',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const InvoiceCardLine = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
});

export default function InvoiceList() {
  const { invoices, filteredInvoice, loading, errorMessage } = useContext(InvoicesContext);

  const invoiceList = filteredInvoice ? filteredInvoice : invoices;

  return (
    <InvoicesList className="invoice-list">
        {errorMessage && <p>{errorMessage}</p>}

        { !errorMessage && invoiceList && invoiceList.map((invoice) => (
              <CardInvoice key={invoice.id}>
                <InvoiceCardHeader>
                    {invoice.patient.name}
                    <DeleteInvoices id={invoice.id} />
                    <EditInvoices  id={invoice.id} amountProp={String(invoice.amount)} dateProp={invoice.date} patientProp={invoice.patient.name}/>
                    <PaidInvoices  id={invoice.id} amountProp={String(invoice.amount)} dateProp={invoice.date} patientProp={invoice.patient.name} paidProp={invoice.paid}/>
                </InvoiceCardHeader>
                <InvoiceCardLine>
                  <p>{invoice.amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                  <p>{formatDate(new Date(invoice.date))}</p>
                  <p>{invoice.paid ? 'Pago' : 'Pendente'}</p>
                </InvoiceCardLine>
              </CardInvoice>
            )
      )
      }

    </InvoicesList>
  );
}

