import InvoicesContext from 'Context/InvoicesContext';
import UserContext from 'Context/UserContext';
import useAxios from 'Hooks/useAxios';
import React, { useContext, useEffect } from 'react';
import { styled } from '../../stitches.config';
import { Button } from './form/Button';
import Input from './form/Input';
import TooltipLogin from './generic/Tooltip';
import { useNavigate } from "react-router-dom";


const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  margin: '0 auto',
  padding: '10px',

  '@bp2': {
    flexDirection: 'column',
    width: '94%',
  },
});

const Login = () => {
  const [email, setEmail] = React.useState('erica.odonto@gmail.com');
  const [password, setPassword] = React.useState('erica@odonto2022');

  const { setToken, setUser, setIsLogin, setErrorMessage, isLogin } = useContext(UserContext);
  const { setLoading } = useContext(InvoicesContext);

  let navigate = useNavigate();

  const { response, loading, error, sendData } = useAxios({
    method: "post",
    url: '/login',
    headers: {
      accept: '*/*',
    },

    data: {email, password}
  });

  useEffect(() => {
    if (error) {
      setErrorMessage(error.response?.data.message);
      setIsLogin(false);
    } else {
      setToken(response?.data.token);
      setUser(response?.data.user);

      if(response?.status === 200) {
        setIsLogin(true);
      }
      setErrorMessage('');
      setLoading(loading);
    }
  } , [response, error, loading ]);

  useEffect(() => {
    if (isLogin){
      return navigate("/invoices");
    }
  },[isLogin]);

  const handleSubmit = () => {
    sendData();
    setLoading(true);
  }

  return (
    <Flex>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id='password'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style="line" OnClick={() => handleSubmit()}>
          Login
        </Button>
        <TooltipLogin />
    </Flex>
  );
}

export default Login;