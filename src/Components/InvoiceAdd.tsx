import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { DialogText, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogWrapper } from "./generic/Dialog";
import Input from "./form/Input";
import { useContext, useEffect, useRef, useState } from "react";
import DataInput from "./form/DataInput";
import { styled } from '../../stitches.config';
import useAxios from 'Hooks/useAxios';
import InvoicesContext from 'Context/InvoicesContext';
import ToastInvoice from './ToastInvoice';
import UserContext from 'Context/UserContext';
import { currencyMask } from 'Helpers/index';


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
      line: {
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

  const [open, setOpen] = useState<any>(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const { setFilteredInvoice, setLoading, setErrorMessage } = useContext(InvoicesContext);
  const {token} = useContext(UserContext);


  const { response, loading, error, sendData, setError } = useAxios({
    method: "post",
    url: '/invoice',
    headers: {
      accept: '*/*',
      Authorization: token
    },
    data: {patient, date, amount: amountNumber}
  });


  const validateForm = () => {
    if (patient === "" && amount === "" && date === null) {
      alert("Preencha todos os campos");
      return false;
    } else if (patient === "") {
      alert("Preencha o campo do paciente");
      return false;
    } else if (amount === "") {
      alert("Preencha o campo de valor");
      return false;
    } else if (date === null) {
      alert("Preencha o campo da data");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      setLoading(true);
      setError('');
      setPatient("");
      setAmount("");
      setDate(null);

      sendData();
    }

  };

  const handleChange = (value: string) => {
    const mask = currencyMask(value);

    setAmountNumber(parseFloat(mask.formatAmount));
    setAmount(mask.value);
  }

  useEffect(() => {
    if (error) {
      setErrorMessage(error.response?.data.message);
    } else {
      setFilteredInvoice(response?.data);
      setErrorMessage('');
      setLoading(loading);

      if(timerRef.current > 1) {
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          setOpen(true);
        }, 100);
      }

      timerRef.current = timerRef.current + 1
    }
  } , [response, error, loading ]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button > <PlusIconIcon /> Adicionar Fatura</Button>
      </DialogTrigger>
      <DialogWrapper>
        <DialogContent>
          <DialogText>
            <DialogTitle>Adicionar Fatura</DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para cadastar uma nova fatura.
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
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => handleChange(e.target.value)}
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

      <ToastInvoice open={open} setOpen={setOpen} message="Fatura adicionada com Sucesso!" />
    </Dialog>
  )
}

export default InvoiceAdd;