import { styled, keyframes } from '@stitches/react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
};

const StyledContent = styled(DropdownMenuPrimitive.Content, { ...contentStyles });

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'white',
});

function Content({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, { ...contentStyles });

function SubContent(props: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

const itemStyles = {
  all: 'unset',
  fontSize: 15,
  lineHeight: 1,
  color: '#134559',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '10px 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  
  '&:hover': {
    color: '#5A8392',
    backgroundColor: '#f5f5f5',
  },

  '&[data-disabled]': {
    color: 'gray600',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: 'secondary',
    color: 'primary',
  },

  '&[a]': {
    color: 'unset',
    textDecoration: 'unset',
  }
};

const titleH3 = {
  all: 'unset',
  fontSize: 20,
  lineHeight: 1,
  color: 'gray600',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 35,
  position: 'relative',
  userSelect: 'none',
  fontWeight: 700,
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledTitle = styled('h3', { ...titleH3 });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: 'highlight',
    color: 'highlight',
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: 'gray600',
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 0.5,
  backgroundColor: '#e5e5e5',
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});


const RightSlotStyle = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: 'gray800',
  '[data-highlighted] > &': { color: 'highlight' },
  '[data-disabled] &': { color: 'gray600' },
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
export const DropdownMenuSubContent = SubContent;
export const RightSlot = RightSlotStyle;
export const TitleH3 = StyledTitle;


