import { render } from "react-dom"
import { styled } from "../../stitches.config"
import Nav from "./Nav"
import logo from "../img/logo.png"

const HeaderStyle = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px',
  background: '#f1f1f1',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    marginBottom: '25px',
})

const Img = styled('img', {
  maxWidth: '200px',
})


export const Header = () => {
  return (
    <HeaderStyle>
      <Img src={logo} alt="ConsulFácil - A Gestão do seu consultório na palma da sua mão"  />
      <Nav />
    </HeaderStyle>
  )
}
