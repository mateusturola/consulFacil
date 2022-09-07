export type UserContextType = {
  token: string,
  setToken: (token: string) => void,
  user: {
    name: string,
    email: string,
  },
  setUser:  (user: any) => void,
  isLogin: boolean,
  setIsLogin:  (isLogin: boolean) => void,
  errorMessage: string,
  setErrorMessage: (message: string) => void,
};


