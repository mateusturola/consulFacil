import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import InvoicesContext from "Context/InvoicesContext";
import useAxios from "Hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { Button } from "./form/Button";
import DateInput from "./form/DateRange";
import Input from "./form/Input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./generic/Modal";

const ButtonOpen = styled("button", {
  backgroundColor: "#5A8392",
  color: "#f1f1f1",
  padding: "20px 0",
  borderRadius: 4,
  fontSize: "15px",
  fontWeight: 600,
  border: "0",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "11px",
  cursor: "pointer",
  width: '100%',
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#04161E",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: "#f6f6f6" },
  "&:focus": { boxShadow: `0 0 0 2px #303030` },
});

const Form = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const Flex = styled('div', { display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' });

const FlexLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5px',
})

const InvoicesFilter = () => {
  const { setFilteredInvoice, setLoading, invoices, disableClearFilter, setDisableClearFilter, errorMessage, setErrorMessage } = useContext(InvoicesContext);

  const [patient, setPatient] = useState("");
  const [initialDate, setinitialDate] = useState(null);
  const [finalDate, setfinalDate] = useState(null);

  const { response, loading, error, sendData, setError } = useAxios({
    method: "get",
    url: '/invoice/filter',
    headers: {
      accept: '*/*',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJFcmljYSIsImlhdCI6MTY2MTU1OTAyOH0.rjRtmkNRGwg4sMxsXREoZRMUlWBwX6_iPzW9DjP9kEA'
    },
    params: {patient, initialDate, finalDate}
  });


  const clearForm = () => {
    setFilteredInvoice(invoices);
    setDisableClearFilter(true);
    setErrorMessage('');
    setError('');

    setPatient("");
    setinitialDate(null);
    setfinalDate(null);
  };

  const handleSubmit = () => {
    setDisableClearFilter();
    setError('');

    if (initialDate > finalDate && finalDate !== null) {
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
    <Flex>
        <h3>Filtrar Faturas</h3>
        <p>
          Preencha os campos que deseja filtrar.
        </p>
        <Form>
          <Input
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Nome do paciente"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <DateInput initialDateState={{initialDate, setinitialDate}} endDataState={{finalDate, setfinalDate}}/>
          <FlexLine>
        <Button OnClick={() => handleSubmit()} aria-label="Close">
          Enviar
        </Button>
        <Button style="line" OnClick={() => clearForm()} disabled={disableClearFilter}>Limpar Filtros</Button>
      </FlexLine>
        </Form>
    </Flex>
  );
};

export default InvoicesFilter;

