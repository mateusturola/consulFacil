import { render } from "react-dom"
import { styled } from "../../stitches.config"
import Nav from "./Nav"
import UserContext from "Context/UserContext"
import { useContext } from "react"
import Logo from "./Logo"

const HeaderStyle = styled('header', {
  background: '#f1f1f1',
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  marginBottom: '25px',
  alignItems: 'center',
})

const ContentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '25px',
  maxWidth: "1080px",
  margin: "0 auto",
})


export const Header = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <>
    { isLogin && <HeaderStyle>
        <ContentHeader>
          <Logo />
          <Nav />
        </ContentHeader>
      </HeaderStyle>
    }
  </>
  )
}
