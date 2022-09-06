import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import logo from "../img/logo.png"



const Img = styled('img', {
  maxWidth: '190px',
  maxHeight: '25px',
  width: 'auto',
  height: 'auto',
})

const Logo = () => {
  return (
    <Img src={logo} alt="ConsulFácil - A Gestão do seu consultório na palma da sua mão"  />
  )
}


export default Logo;