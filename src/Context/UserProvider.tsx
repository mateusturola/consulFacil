/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useLocalStorage } from 'Hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { ReactNode, useState } from 'react';
import UserContext from './UserContext';

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [tokenLocal] = useLocalStorage('token', '');
  const [isLoginLocal] = useLocalStorage('isLogin', false);
  const [userData] = useLocalStorage('userData', false);

  const [token, setToken] = useState<string>(tokenLocal !== '' ? tokenLocal : '');
  const [user, setUser] = useState<any>(userData);
  const [isLogin, setIsLogin] = useState<boolean>(tokenLocal !== '');
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
