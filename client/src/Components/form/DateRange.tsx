
import { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import { styled } from '@stitches/react';

registerLocale('pt-BR', ptBR);

const InputStyled = styled(DatePicker, {
  all: 'unset',
  borderRadius: 4,
  padding: '15px',
  fontSize: 17,
  lineHeight: 1,
  color: 'primary',
  boxShadow: `0 0 0 1px ${'black'}`,
  width: '80%',

  '&:focus': { boxShadow: `0 0 0 2px ${'highlight'}` },
});

const FlexLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5px',
})

const DateInput = ({initialDateState, endDataState}) => {

  return (
    <FlexLine>
      <InputStyled
        selected={initialDateState.initialDate}
        onChange={(date) => initialDateState.setinitialDate(date)}
        selectsStart
        locale={ptBR}
        initialDate={initialDateState.initialDate}
        finalDate={initialDateState.finalDate}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        placeholderText="Data Inicial"
      />
      <InputStyled
        selected={endDataState.finalDate}
        onChange={(date) => endDataState.setfinalDate(date)}
        selectsEnd
        locale={ptBR}
        initialDate={endDataState.initialDate}
        finalDate={endDataState.finalDate}
        minDate={endDataState.initialDate}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        placeholderText="Data final"
      />
    </FlexLine>
  );
  }

  export default DateInput;