/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import InvoicesContext from './InvoicesContext';

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {

  const contextValue = { };

  return (
    <InvoicesContext.Provider value={contextValue}>
      {children}
    </InvoicesContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
