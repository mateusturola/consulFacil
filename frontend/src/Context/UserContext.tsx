import { createContext } from 'react';

const initialState = {
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  token: '',
  setToken: () => {},
}

const UserContext = createContext({});

export default UserContext;
