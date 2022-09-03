import { ReactNode } from "react";
import { styled } from "../../../stitches.config";
import { Slot } from '@radix-ui/react-slot';


type ButtonProps = {
  children: ReactNode,
  style?: any,
  OnClick?: () => void,
  disabled?: boolean,
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

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  variants: {
    cor: {
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
        '&:disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
    },
  },
});

export const Button = ({children, style,  OnClick, disabled}: ButtonProps) => {
  disabled = disabled || false;
  return (
    <ButtonStyle cor={style} onClick={OnClick} type="button" disabled={disabled}>
      {children}
    </ButtonStyle>
  )
}