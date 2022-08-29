import React, { ReactNode } from 'react';
import { styled } from '@stitches/react';
import { violet, blackA, mauve, green } from '@radix-ui/colors';

type InputProps = {
  type: string,
  id: string,
  name: string,
  placeholder: string,
};


const InputStyled = styled('input', {
  all: 'unset',
  flex: '1',
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

const Input = ({text, id, placeholder}: InputProps) => (
    <InputStyled type={text} id={id} placeholder={placeholder} />
);

export default Input;
