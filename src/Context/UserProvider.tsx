/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { ReactNode, useState } from 'react';
import UserContext from './UserContext';

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<any>({});
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const contextValue = { token, setToken, user, setUser, isLogin, setIsLogin, errorMessage, setErrorMessage };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
