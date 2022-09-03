import { Cross2Icon,  MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { DialogText, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogWrapper } from "./generic/Dialog";
import Input from "./form/Input";
import { useContext, useEffect, useState } from "react";
import { styled } from '../../stitches.config';
import useAxios from 'Hooks/useAxios';
import InvoicesContext from 'Context/InvoicesContext';
import DateInput from "./form/DateRange";

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
  flexDirection: 'row',
  gap: '5px',
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

const SearchIcon = styled(MagnifyingGlassIcon, {
  height: '20px',
  width: '20px',
});

const Form = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});



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



const InvoicesFilter = () => {
  const { setFilteredInvoice, setLoading, invoices, disableClearFilter, setDisableClearFilter, errorMessage, setErrorMessage } = useContext(InvoicesContext);

  const [patient, setPatient] = useState("");
  const [inDate, setInDate] = useState<any>(null);
  const [finalDate, setFinalDate] = useState<any>(null);

  const { response, loading, error, sendData, setError } = useAxios({
    method: "get",
    url: '/invoice/filter',
    headers: {
      accept: '*/*',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJFcmljYSIsImlhdCI6MTY2MTU1OTAyOH0.rjRtmkNRGwg4sMxsXREoZRMUlWBwX6_iPzW9DjP9kEA'
    },
    params: {patient, initialDate: inDate, finalDate}
  });


  const handleSubmit = () => {
    setDisableClearFilter(false);
    setError('');

    if (finalDate !== null && inDate !== null && inDate > finalDate && finalDate !== null) {
      alert('A data inicial deve ser menor que a data final');
      return;
    }

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
        <Button><SearchIcon /> Filtrar Faturas</Button>
      </DialogTrigger>
      <DialogWrapper>
        <DialogContent>
          <DialogText>
            <DialogTitle>Filtrar Faturas</DialogTitle>
            <DialogDescription>
            Preencha os campos que deseja filtrar.
            </DialogDescription>
          </DialogText>
            <Flex>
            <Form>
          <Input
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Nome do paciente"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <DateInput initialDateState={{inDate, setInDate}} endDataState={{finalDate, setFinalDate}}/>

        </Form>
            </Flex>
          <FlexButton>
            <DialogClose asChild>
              <Button onClick={() => handleSubmit()}>Enviar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="cancel">Cancelar</Button>
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

export default InvoicesFilter;