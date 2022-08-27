import { ReactNode } from "react";
import { styled } from "../../../stitches.config";

type ButtonProps = {
  children: ReactNode;
};

const ButtonStyle = styled('button', {
  backgroundColor: '#5A8392',
  color: 'white',
  padding: '20px 0',
  borderRadius: 4,
  fontSize: '18px',
  fontWeight:600,
  border: '0',
  textTransform: 'uppercase',

  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});

export const Button = ({children}: ButtonProps) => {
  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  )
}