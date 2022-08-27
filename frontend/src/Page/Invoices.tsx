import useAxios from '../Hooks/useAxios';
import InvoicesContext from '../Context/InvoicesContext';
import { useContext, useEffect } from 'react';
import InvoiceList from '../Components/InvoiceList';

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
  } , [response, loading ]);

  return (
    <div>
      <h1>Invoices</h1>
      <p>Soon...</p>
      <InvoiceList />
    </div>
  );
}
