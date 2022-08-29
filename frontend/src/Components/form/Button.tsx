import { ReactNode } from "react";
import { styled } from "../../../stitches.config";
import { Slot } from '@radix-ui/react-slot';


type ButtonProps = {
  children: ReactNode,
  style?: string,
  OnClick?: () => void,
};

const ButtonStyle = styled('button', {
  backgroundColor: '#5A8392',
  color: '#f1f1f1',
  padding: '20px 0',
  borderRadius: 4,
  fontSize: '15px',
  fontWeight:600,
  border: '0',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '11px',
  width: '100%',

  variants: {
    style: {
      violet: {
        backgroundColor: 'blueviolet',
        color: '#f1f1f1',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      line: {
        border: '2px solid #5A8392',
        backgroundColor: '#f1f1f1',
        color: '#5A8392',
        '&:hover': {
          backgroundColor: '#5A8392',
          color: '#f1f1f1',
        },
      },
    },
  },
});

export const Button = ({children, style, OnClick}: ButtonProps) => {
  return (
    <ButtonStyle style={style} onClick={OnClick}>
      {children}
    </ButtonStyle>
  )
}