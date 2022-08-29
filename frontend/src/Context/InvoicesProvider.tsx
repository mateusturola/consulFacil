/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { ReactNode, useState } from 'react';
import { IInvoice } from 'Types/invoice';
import InvoicesContext from './InvoicesContext';

type InvoicesProviderProps = {
  children: ReactNode;
};

function InvoicesProvider({ children }: InvoicesProviderProps) {

  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const [filteredInvoice, setFilteredInvoice] = useState<IInvoice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const contextValue = { invoices, setInvoices, filteredInvoice, setFilteredInvoice, loading, setLoading, error, setError };

  return (
    <InvoicesContext.Provider value={contextValue}>
      {children}
    </InvoicesContext.Provider>
  );
}

InvoicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InvoicesProvider;
