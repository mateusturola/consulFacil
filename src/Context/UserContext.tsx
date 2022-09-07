import { createContext } from 'react';
import { UserContextType } from 'Types/user';

const initialState = {
  token: '',
  setToken: () => {},
  user: {
    name: '',
    email: '',
  },
  setUser:  () => {},
  isLogin: false,
  setIsLogin:  () => {},
  errorMessage: '',
  setErrorMessage: () => {},
};

const UserContext = createContext<UserContextType>(initialState);

export default UserContext;
