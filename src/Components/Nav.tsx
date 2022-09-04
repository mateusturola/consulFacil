import * as React from "react";
import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, TitleH3 } from "./generic/DropdownMenu";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Box = styled('div', {});


const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#134559',
  '&:hover': { color: '#134559' },
});

export const Nav = () => {
  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Menu Principal">
            <HamburgerMenuIcon  width="25" height="25"/>
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
