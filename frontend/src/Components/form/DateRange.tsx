
import { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import { styled } from '@stitches/react';

registerLocale('pt-BR', ptBR);

const InputStyled = styled(DatePicker, {
  all: 'unset',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '15px',
  fontSize: 17,
  lineHeight: 1,
  color: 'primary',
  boxShadow: `0 0 0 1px ${'black'}`,
  width: '90%',

  '&:focus': { boxShadow: `0 0 0 2px ${'highlight'}` },
});

const DateInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <InputStyled
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        locale={ptBR}
        startDate={startDate}
        endDate={endDate}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        placeholderText="Data Inicial"
      />
      <InputStyled
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        locale={ptBR}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        placeholderText="Data final"
      />
    </>
  );
  }

  export default DateInput;