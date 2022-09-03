import { styled } from "@stitches/react";
import { Cross2Icon } from '@radix-ui/react-icons';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogWrapper } from "./generic/Dialog";
import Input from "./form/Input";
import { useState } from "react";
import DataInput from "./form/DataInput";


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
  border: '2px solid #5A8392',
  backgroundColor: '#f1f1f1',
  color: '#5A8392',
  '&:hover': {
    backgroundColor: '#5A8392',
    color: '#f1f1f1',
  }
});

const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#04161E',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '#5A8392' },
  '&:focus': { boxShadow: `0 0 0 2px #134559` },
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: '#303030',
  textAlign: 'left',
});

const InvoiceAdd = () => {
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState<any>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button cor="line">Adicionar Cobrança</Button>
      </DialogTrigger>
      <DialogWrapper>
        <DialogContent >
          <DialogTitle>Adicionar Cobrança</DialogTitle>
          <DialogDescription>
            Preencha os dadado abaixo para cadastar uma nova cobrança.
          </DialogDescription>
          <Fieldset>
            <Label htmlFor="patientName">Paciente</Label>
            <Input
              type="text"
              id="patientName"
              name="patientName"
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="data">Data para pagamento</Label>
            <DataInput
              id="data"
              dateState={{ date, setDate }}
            />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end', flexDirection: 'row', gap: '10px' }}>
            <DialogClose asChild>
              <Button>Salvar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Cancelar</Button>
            </DialogClose>
          </Flex>
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