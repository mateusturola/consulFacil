import InvoicesContext from 'Context/InvoicesContext';
import { useContext, useEffect } from 'react';
import { styled } from '../../stitches.config';
import { Button } from 'Components/form/Button';
import InvoicesFilter from 'Components/InvoicesFilter';
import InvoiceAdd from 'Components/InvoiceAdd';

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
  const { invoices, disableClearFilter, setDisableClearFilter, setFilteredInvoice, setErrorMessage} = useContext(InvoicesContext);

const clearForm = () => {
  setFilteredInvoice(invoices);
  setDisableClearFilter(true);
  setErrorMessage('');
};


  return (
    <FlexLine>
      <InvoiceAdd />
      <InvoicesFilter />
      {!disableClearFilter && <Button OnClick={() => clearForm()}>Limpar Filtros</Button>}
    </FlexLine>
  );
}
