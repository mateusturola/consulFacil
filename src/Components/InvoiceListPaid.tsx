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
  justifyContent: 'flex-start',
  flexWrap: 'wrap',

  '@bp2': {
    flexDirection: 'row',
  },
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
    gap: '25px',
    border: '1px solid #e6e6e6',
    width: '100%',
    '&:hover': {
      background: '#e6e6e6',
      border: '1px solid #cacaca',
    },

    '@bp2': {
      width: '32%',
    },
});

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

const InvoiceCardList = styled('p', {
  border: '1px solid #aeaeae',
  padding: '1px 15px',
  fontSize: '0.8rem',
  borderRadius: '4px',
  fontWeight: '600',
})

const InvoiceCardLine = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
});

const InvoiceAction = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '5px',
});

export default function InvoiceListPaid() {
  const { invoices, loading, errorMessage } = useContext(InvoicesContext);

  return (
    <InvoicesList className="invoice-list">
        {errorMessage && <p>{errorMessage}</p>}

        { !errorMessage && invoices && invoices.map((invoice) => {
          if(invoice.paid) {
            return(
              <CardInvoice key={invoice.id}>
                <InvoiceCardHeader>
                    {invoice.patient.name}
                    <InvoiceAction>
                      <DeleteInvoices id={invoice.id} />
                      <EditInvoices  id={invoice.id} amountProp={String(invoice.amount)} dateProp={invoice.date} patientProp={invoice.patient.name}/>
                      <PaidInvoices  id={invoice.id} amountProp={String(invoice.amount)} dateProp={invoice.date} patientProp={invoice.patient.name} paidProp={invoice.paid}/>
                    </InvoiceAction>
                </InvoiceCardHeader>
                <InvoiceCardLine>
                  <InvoiceCardList>{invoice.amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</InvoiceCardList>
                  <InvoiceCardList>{formatDate(new Date(invoice.date))}</InvoiceCardList>
                  <InvoiceCardList>{invoice.paid ? 'Pago' : 'Pendente'}</InvoiceCardList>
                </InvoiceCardLine>
              </CardInvoice>
            )}
        })}

    </InvoicesList>
  );
}

