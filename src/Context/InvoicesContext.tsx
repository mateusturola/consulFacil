import { createContext } from 'react';
import { InvoiceContextType } from 'Types/invoice';

const initialState = {
  invoices: [],
  setInvoices: () => {},
  loading: false,
  setLoading: () => {},
  disableClearFilter: true,
  setDisableClearFilter: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
  sumInvoices: 0,
  setSumInvoices: () => {},
}

const InvoicesContext = createContext<InvoiceContextType>(initialState);

export default InvoicesContext;
