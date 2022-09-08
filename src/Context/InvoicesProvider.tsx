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
  const [loading, setLoading] = useState<boolean>(false);
  const [disableClearFilter, setDisableClearFilter] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [sumInvoices, setSumInvoices] = useState<number>(0);
  
  const sumInvoicesValue = () => {
    const sum = invoices.reduce((acc, invoice) => {
      if (!invoice.paid) {
        return acc + invoice.amount;
      } else {
        return acc;
      }
    }
    , 0);

    setSumInvoices(sum);

  };
  
  useEffect(() => {
    if (invoices || invoices) {
      sumInvoicesValue();
    }
  }, [invoices, invoices]);

  const contextValue = { invoices, setInvoices, loading, setLoading, disableClearFilter, setDisableClearFilter, errorMessage, setErrorMessage, sumInvoices, setSumInvoices };

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
