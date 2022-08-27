import { ReactNode } from "react";
import { styled } from "../../../stitches.config";

type ButtonProps = {
  children: ReactNode,
  style?: string,
};

const ButtonStyle = styled('button', {
  backgroundColor: '#5A8392',
  color: '#f1f1f1',
  padding: '20px 0',
  borderRadius: 4,
  fontSize: '18px',
  fontWeight:600,
  border: '0',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '11px',

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
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});

export const Button = ({children, style}: ButtonProps) => {
  return (
    <ButtonStyle style={style}>
      {children}
    </ButtonStyle>
  )
}