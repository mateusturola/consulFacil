import useAxios from 'Hooks/useAxios';
import InvoicesContext from 'Context/InvoicesContext';
import { useContext, useEffect } from 'react';
import InvoiceList from 'Components/InvoiceList';
import { Title } from 'Components/generic/Title';
import { styled } from '../../stitches.config';
import { SummaryInvoices } from 'Components/SummaryInvoices';
import InvoicesNav from 'Components/InvoiceNav';
import Loading from 'Components/generic/Loading';
import UserContext from 'Context/UserContext';
import { Link } from 'react-router-dom';
import IsLoginMessage from 'Page/IsLoginMessage';
import InvoiceListPaid from 'Components/InvoiceListPaid';

const Main = styled('main', {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})


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
      <Title>Cobranças Pagas</Title>
      {!isLogin && loading ? <Loading /> : ( 
        <>
          <InvoicesNav />
          <InvoiceListPaid />
        </>
      )}
    </Main>
  );
}
}
