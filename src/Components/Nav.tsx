import { useContext } from "react";
import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, TitleH3 } from "./generic/DropdownMenu";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import UserContext from "Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "Hooks/useLocalStorage";


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

const Button = styled('button', {
  all: 'unset',
});

export const Nav = () => {
  const { user, setIsLogin } = useContext(UserContext);

  const [tokenLocal, setTokenLocal] = useLocalStorage('token', '');
  const [isLoginLocal, setIsLoginLocal] = useLocalStorage('isLogin', false);
  let navigate = useNavigate();


  const handleLogout = () => {
    setIsLogin(false);
    setTokenLocal('');
    setIsLoginLocal(false);
    navigate("/");
  };

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
            Olá, {user.name}
          </TitleH3>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/invoices">Faturas Pendentes</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/invoices/paid">Faturas Pagas</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button type="button" onClick={handleLogout}>
              Sair
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default Nav;
