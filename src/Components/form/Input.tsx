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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '15px',
  fontSize: 17,
  lineHeight: 1,
  color: 'primary',
  boxShadow: `0 0 0 1px ${'black'}`,
  width: '90%',

  '&:focus': { boxShadow: `0 0 0 2px ${'highlight'}` },
});

const Input = ({text, id, placeholder, value, onChange}: InputProps) => (
    <InputStyled type={text} id={id} placeholder={placeholder}  value={value} onChange={onChange}/>
);

export default Input;
