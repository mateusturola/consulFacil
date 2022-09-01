
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
        selected={initialDateState.startDate}
        onChange={(date) => initialDateState.setStartDate(date)}
        selectsStart
        locale={ptBR}
        startDate={initialDateState.startDate}
        endDate={initialDateState.endDate}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        placeholderText="Data Inicial"
      />
      <InputStyled
        selected={endDataState.endDate}
        onChange={(date) => endDataState.setEndDate(date)}
        selectsEnd
        locale={ptBR}
        startDate={endDataState.startDate}
        endDate={endDataState.endDate}
        minDate={endDataState.startDate}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        placeholderText="Data final"
      />
    </FlexLine>
  );
  }

  export default DateInput;