import { createContext } from 'react';
import { InvoiceContextType } from '../types/invoice';

const initialState = {
  invoices: [],
  setInvoices: () => {},
  filteredInvoice: [],
  setFilteredInvoice: () => {},
  loading: false,
  setLoading: () => {},
}

const InvoicesContext = createContext<InvoiceContextType>(initialState);

export default InvoicesContext;
