/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import InvoicesContext from './InvoicesContext';

type InvoicesProviderProps = {
  children: ReactNode;
};

function InvoicesProvider({ children }: InvoicesProviderProps) {

  const contextValue = { };

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
