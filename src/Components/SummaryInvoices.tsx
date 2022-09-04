import InvoicesContext from "Context/InvoicesContext";
import { useContext } from "react";
import { styled } from "../../stitches.config";
import Loading from "./generic/Loading";


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

export const SummaryInvoices = () => {
  const { sumInvoices, loading } = useContext(InvoicesContext);
  return (
    <CardInvoice>
      <p>Você tem</p>
      <h3>{
        sumInvoices.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      }</h3>
      <p>a receber.</p>
    </CardInvoice>
  )
}
