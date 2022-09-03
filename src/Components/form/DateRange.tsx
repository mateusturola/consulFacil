
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import { styled } from '@stitches/react';
import { DateRangeProps } from 'Types/DateRange';

registerLocale('pt-BR', ptBR);

const InputStyled = styled(DatePicker, {
  all: 'unset',
  borderRadius: 4,
  padding: '15px',
  fontSize: 17,
  lineHeight: 1,
  color: 'primary',
  boxShadow: `0 0 0 1px ${'black'}`,
  width: '100%',
  
  '&:focus': { boxShadow: `0 0 0 2px ${'highlight'}` },
});

const FlexLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5px',
})


const DateInput = ({initialDateState, endDataState}: DateRangeProps) => {

  return (
    <>
      <InputStyled
        placeholderText="Data Inicial"
        selected={initialDateState.inDate}
        onChange={(date) => initialDateState.setInDate(date)}
        locale={ptBR}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        selectsStart
        startDate={initialDateState.inDate}
        endDate={endDataState.inDate}
      />
      <InputStyled
        placeholderText="Data final"
        selected={endDataState.finalDate}
        onChange={(date) => endDataState.setFinalDate(date)}
        locale={ptBR}
        todayButton="Hoje"
        dateFormat="dd/MM/yyyy"
        selectsEnd
        minDate={initialDateState.inDate}
        startDate={initialDateState.inDate}
        endDate={endDataState.inDate}
      />
    </>
  );
  }

  export default DateInput;