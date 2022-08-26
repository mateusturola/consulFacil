import { createContext } from 'react';

const initialState = {
  invoices: [],
  setInvoices: () => {},
  filteredInvoice: [],
  setFilteredInvoice: () => {},
  loading: false,
  setLoading: () => {},
}

const InvoicesContext = createContext({});

export default InvoicesContext;
