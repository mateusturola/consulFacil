import React, { ReactNode } from 'react';
import { styled } from '@stitches/react';

type InputProps = {
  type: string,
  id: string,
  name: string,
  placeholder?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  text?: string,
};


const InputStyled = styled('input', {
  all: 'unset',
  borderRadius: 4,
  padding: '15px',
  fontSize: 17,
  lineHeight: 1,
  color: '#5A8392',
  boxShadow: '0 0 0 1px #303030',
  width: '100%',

  '&:focus': { boxShadow: '0 0 0 2px #134559' },
});

const Input = ({type, id, placeholder, value, onChange}: InputProps) => {
  return (
    <InputStyled type={type} id={id} placeholder={placeholder}  value={value} onChange={onChange}/>
)
};

export default Input;
