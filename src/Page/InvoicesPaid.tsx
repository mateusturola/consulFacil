import useAxios from 'Hooks/useAxios';
import InvoicesContext from 'Context/InvoicesContext';
import { useContext, useEffect } from 'react';
import { Title } from 'Components/generic/Title';
import { styled } from '../../stitches.config';
import Loading from 'Components/generic/Loading';
import UserContext from 'Context/UserContext';
import IsLoginMessage from 'Page/IsLoginMessage';
import InvoiceListPaid from 'Components/InvoiceListPaid';

const Main = styled('main', {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

const Col = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  margin: "0 auto",
  maxWidth: "1080px",
});



export default function InvoicesPaid() {
  const { setInvoices, setLoading} = useContext(InvoicesContext);
  const {token, isLogin} = useContext(UserContext);

  const { response, loading, sendData, error } = useAxios({
    method: "get",
    url: '/invoice',
    headers: {
      accept: '*/*',
      Authorization: token,
    }
  });

  useEffect(() => {
    setInvoices(response?.data);
    setLoading(loading);
    sendData();
  } , [loading]);

  if(!isLogin) {
    return (
      <IsLoginMessage/>
    )
  } else {
      return (
    <Main>
      {!isLogin && loading ? <Loading /> : ( 
          <Col>
          <Title>Faturas Pagas</Title>
            <InvoiceListPaid />
          </Col>
      )}
    </Main>
  );
}
}
