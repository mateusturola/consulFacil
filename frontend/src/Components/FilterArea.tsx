import { styled } from "../../stitches.config"
import { Button } from "./form/Button"
import Input from "./form/Input"

const Form = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 15
})

export const FilterArea = () => {
  return (
    <Form action="get">
      <Input type="text" id="patientName" name="patientName" placeholder="Nome do paciente"/>
        <Input type="text" id="initialDate" name="initialDate" placeholder="Data Inicial"/>
        <Input type="text" id="finalDate" name="finalDate" placeholder="Data Final"/>
        <Button>Enviar</Button>
    </Form>
  )
}