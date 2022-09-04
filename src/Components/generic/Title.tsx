import { styled } from "@stitches/react";
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

const H1 = styled('h1', {
    fontSize: '1.5rem',
    paddingBottom: '20px',
    color: '#303030',
})

export const Title = ({children}: TitleProps) => {
  return (
    <H1>
      {children}
    </H1>
  )
}