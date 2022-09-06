import InvoicesContext from 'Context/InvoicesContext';
import { styled } from '../../stitches.config';
import { Button } from '../Components/form/Button';
import TooltipLogin from '../Components/generic/Tooltip';
import { useNavigate } from "react-router-dom";
import { TitleH3 } from '../Components/generic/DropdownMenu';
import Logo from '../Components/Logo';


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

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',

})

const IsLoginMessage = () => {
    let navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  }

  return (
    <Flex>
      <LoginCard>
        <Logo />
          <Content>
            <TitleH3>Área Restrita</TitleH3>
            <p>Para continuar acesse a sua conta</p>
          </Content>
          <Button style="line" OnClick={() => handleSubmit()}>
            Fazer Login
          </Button>
      </LoginCard>
    </Flex>
  );
}

export default IsLoginMessage;