import InvoicesContext from 'Context/InvoicesContext';
import { useContext, useEffect } from 'react';
import { styled } from '../../stitches.config';
import { Button } from 'Components/form/Button';
import InvoicesFilter from 'Components/InvoicesFilter';
import InvoiceAdd from 'Components/InvoiceAdd';
import useAxios from 'Hooks/useAxios';
import UserContext from 'Context/UserContext';

const FlexLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5px',

  '@bp2': {
    flexDirection: 'row',
  },

})



export default function InvoicesNav() {
  const { disableClearFilter, setDisableClearFilter, setInvoices, setErrorMessage} = useContext(InvoicesContext);
  const {token} = useContext(UserContext);

  const { response, loading, sendData, error } = useAxios({
    method: "get",
    url: "/invoice",
    headers: {
      accept: "*/*",
      Authorization: token,
    },
  });

  useEffect(() => {
    sendData();
  }, [])

const clearForm = () => {
  sendData();
  setDisableClearFilter(true);
  setErrorMessage('');
  setInvoices(response?.data);
};


  return (
    <>
      <FlexLine>
        <InvoiceAdd />
        <InvoicesFilter />
      </FlexLine>
      {!disableClearFilter &&
        <FlexLine>
            <Button OnClick={() => clearForm()}>Limpar Filtros</Button>
        </FlexLine>
      }
    </>
  );
}
