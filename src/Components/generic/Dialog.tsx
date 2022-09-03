import React, { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 700,
  color: '#303030',
  fontSize: 19,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  color:  '#303030',
  fontSize: 15,
  lineHeight: 1.5,
});

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.26)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});


const StyledWrapper = styled(DialogPrimitive.Content, {
  backgroundColor: '#f6f6f6',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});


const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '#04161E',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled('div', {
  gap: '15px',
  display: 'flex',
  flexDirection: 'column',
});

const StyledHeader = styled('div', {
  gap: '2px',
  display: 'flex',
  flexDirection: 'column',
});



export type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean,
}


export const Dialog = ({ children, overlay , ...props}: DialogProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      {overlay && <StyledOverlay />}
      {children}
    </DialogPrimitive.Root>
  );
};

export type DialogWrapperProps = DialogPrimitive.DialogContentProps & React.ComponentProps<typeof StyledWrapper> & {
  width?: number,
  maintainDimension?: boolean,
}


export const DialogWrapper = ({ children, ...props}: DialogWrapperProps) => {
  return (
    <StyledWrapper {...props}>
      {children}
    </StyledWrapper>
  );
};


export const DialogTrigger = DialogPrimitive.Trigger;
DialogTrigger.displayName = 'DialogTrigger';

export const DialogContent = StyledContent;
DialogContent.displayName = 'ModalContent';


export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
export const DialogText = StyledHeader;