import * as React from "react";
import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, TitleH3 } from "./generic/DropdownMenu";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Box = styled('div', {});


const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'highlight',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${'black'}`,
  '&:hover': { backgroundColor: 'secondary' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const Nav = () => {
  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Menu Principal">
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <TitleH3>
            Olá, Érica
          </TitleH3>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/invoices">Financeiro</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default Nav;