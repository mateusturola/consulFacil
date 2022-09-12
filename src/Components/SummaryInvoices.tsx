import InvoicesContext from "Context/InvoicesContext";
import { useContext } from "react";
import { styled } from "../../stitches.config";


const CardInvoice = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'black',
  fontSize: '1.0rem',
  background: 'white',
  borderRadius: '4px',
  padding: '20px',
  gap: '10px',
  border: '1px solid #e6e6e6',
  textAlign: 'center',

  '&:hover': {
    background: '#e6e6e6',
    border: '1px solid #cacaca',
  },
})


const TitleH3 =  styled('h3', {
  all: 'unset',
  fontSize: 20,
  lineHeight: 1,
  color: 'gray600',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 35,
  position: 'relative',
  userSelect: 'none',
  fontWeight: 700,
  color: '#134559',
});

export const SummaryInvoices = () => {
  const { sumInvoices, loading } = useContext(InvoicesContext);
  return (
    <CardInvoice>
      <p>Você tem</p>
      <TitleH3>{
        sumInvoices.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      }</TitleH3>
      <p>a receber.</p>
    </CardInvoice>
  )
}
