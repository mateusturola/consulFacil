import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import InvoicesContext from "Context/InvoicesContext";
import useAxios from "Hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { Button } from "./form/Button";
import DateInput from "./form/DateRange";
import Input from "./form/Input";


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


  const clearForm = () => {
    setFilteredInvoice(invoices);
    setDisableClearFilter(true);
    setErrorMessage('');
    setError('');

    setPatient("");
    setInDate(null);
    setFinalDate(null);
  };

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
          <DateInput initialDateState={{inDate, setInDate}} endDataState={{finalDate, setFinalDate}}/>
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

