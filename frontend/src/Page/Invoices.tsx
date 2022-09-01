import useAxios from 'Hooks/useAxios';
import InvoicesContext from 'Context/InvoicesContext';
import { useContext, useEffect } from 'react';
import InvoiceList from 'Components/InvoiceList';
import { Title } from 'Components/generic/Title';
import { styled } from '../../stitches.config';
import { Button } from 'Components/form/Button';
import InvoicesFilter from 'Components/InvoicesFilter';

const Main = styled('main', {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})



export default function Invoices() {
  const { setInvoices, setLoading } = useContext(InvoicesContext);
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: '/invoice',
    headers: {
      accept: '*/*',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJFcmljYSIsImlhdCI6MTY2MTU1OTAyOH0.rjRtmkNRGwg4sMxsXREoZRMUlWBwX6_iPzW9DjP9kEA'
    }
  });

  useEffect(() => {
    setInvoices(response?.data);
    setLoading(loading);
    sendData();
  } , [response, loading ]);

  return (
    <Main>
      <Title>Financeiro</Title>
      <InvoicesFilter />
      <InvoiceList />
    </Main>
  );
}
