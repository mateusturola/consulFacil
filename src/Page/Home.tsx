import { TitleH3 } from 'Components/generic/DropdownMenu';
import Loading from 'Components/generic/Loading';
import Login from 'Components/Login';
import Logo from 'Components/Logo';
import InvoicesContext from 'Context/InvoicesContext';
import { useContext } from 'react';
import { globalCss, styled } from '../../stitches.config';

const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',
  margin: '0 auto',
  height: '100%',
  background: 'linear-gradient(-135deg,#134559,#5A8392)',

});

const LoginCard = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '50px',
  width: '85vw',
  margin: '0 auto',
  backgroundColor: '#f1f1f1',
  border: '2px solid #134559',
  color: '#134559',
  padding: '50px 30px',
  borderRadius: '5px',
  boxShadow: '#134559 3px 3px 5px',
  '@bp2': {
    width: '80%',
  },
});


export default function Home() {
  const { loading } = useContext(InvoicesContext);

  return (
    <Flex>
      { loading && <Loading />}
      <LoginCard>
        <Logo />
        <Login />
      </LoginCard>
    </Flex>
  );
}
