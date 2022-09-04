import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { DialogText, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogWrapper } from "./generic/Dialog";
import Input from "./form/Input";
import { useContext, useEffect, useState } from "react";
import DataInput from "./form/DataInput";
import { styled } from '../../stitches.config';
import useAxios from 'Hooks/useAxios';
import InvoicesContext from 'Context/InvoicesContext';


const Button = styled('button', {
  padding: '20px 0',
  borderRadius: 4,
  fontSize: '15px',
  fontWeight:600,
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '11px',
  width: '100%',
  border: '2px solid #134559',
  backgroundColor: '#f1f1f1',
  color: '#134559',

  '&:hover': {
    backgroundColor: '#134559',
    color: '#f1f1f1',
  },

  variants: {
    color: {
      cancel: {
        border: '2px solid #5A8392',
        backgroundColor: '#f1f1f1',
        color: '#5A8392',

        '&:hover': {
          backgroundColor: '#5A8392',
          color: '#f1f1f1',
        },
      },
    },
  },

});

const FlexButton = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',

  '@bp2': {
    flexDirection: 'row',
  },
});

const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  gap: '10px',
  width: '90%',

  '@bp2': {
    flexDirection: 'column',
    width: '94%',
  },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#04161E',
  position: 'absolute',
  top: 10,
  right: 10,
});

const PlusIconIcon = styled(PlusIcon, {
  height: '20px',
  width: '20px',
});




const InvoiceAdd = () => {
  const [patient, setPatient] = useState("");
  const [amount, setAmount] = useState("");
  const [amountNumber, setAmountNumber] = useState(0);
  const [date, setDate] = useState<any>(null);

  const { setFilteredInvoice, setLoading, setErrorMessage } = useContext(InvoicesContext);

  const { response, loading, error, sendData, setError } = useAxios({
    method: "post",
    url: '/invoice',
    headers: {
      accept: '*/*',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJFcmljYSIsImlhdCI6MTY2MTU1OTAyOH0.rjRtmkNRGwg4sMxsXREoZRMUlWBwX6_iPzW9DjP9kEA'
    },
    data: {patient, date, amount: amountNumber}
  });

  const handleSubmit = () => {
    const formatAmount = amount.replace(/[^\d\,]/g, "").replace(",", ".")
    setAmountNumber(parseFloat(formatAmount));
    setLoading(true);

    setError('');
    setPatient("");
    setAmount("");
    setDate(null);

    sendData();
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error.response?.data.message);
    } else {
      setFilteredInvoice(response?.data);
      setErrorMessage('');
      setLoading(loading);
    }
  } , [response, error, loading ]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button > <PlusIconIcon /> Adicionar Cobrança</Button>
      </DialogTrigger>
      <DialogWrapper>
        <DialogContent>
          <DialogText>
            <DialogTitle>Adicionar Cobrança</DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para cadastar uma nova cobrança.
            </DialogDescription>
          </DialogText>
            <Flex>
              <Input
                placeholder="Nome do Paciente"
                type="text"
                id="patientName"
                name="patientName"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
              />
              <Input
                placeholder="Valor"
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <DataInput
                placeholder="Data para pagamento"
                id="data"
                dateState={{ date, setDate }}
              />
            </Flex>
          <FlexButton>
            <DialogClose asChild>
              <Button onClick={() => handleSubmit()}>Salvar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="line">Cancelar</Button>
            </DialogClose>
          </FlexButton>
          <DialogClose asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  )
}

export default InvoiceAdd;