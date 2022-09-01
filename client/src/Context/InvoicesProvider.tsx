/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { ReactNode, useEffect, useState } from 'react';
import { IInvoice } from 'Types/invoice';
import InvoicesContext from './InvoicesContext';

type InvoicesProviderProps = {
  children: ReactNode;
};


function InvoicesProvider({ children }: InvoicesProviderProps) {

  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const [filteredInvoice, setFilteredInvoice] = useState<IInvoice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [disableClearFilter, setDisableClearFilter] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [sumInvoices, setSumInvoices] = useState<number>(0);
  
  const sumInvoicesValue = () => {
    const invoiceList = filteredInvoice ? filteredInvoice : invoices;

    const sum = invoiceList.reduce((acc, invoice) => {
      return acc + invoice.amount;
    }
    , 0);

    setSumInvoices(sum);

  };
  
  useEffect(() => {
    if (invoices || filteredInvoice) {
      sumInvoicesValue();
    }
  }, [filteredInvoice, invoices]);

  const contextValue = { invoices, setInvoices, filteredInvoice, setFilteredInvoice, loading, setLoading, disableClearFilter, setDisableClearFilter, errorMessage, setErrorMessage, sumInvoices, setSumInvoices };

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
