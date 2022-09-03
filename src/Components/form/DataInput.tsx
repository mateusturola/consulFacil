
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
  color: '#5A8392',
  boxShadow: '0 0 0 1px #303030',
  width: '100%',

  '&:focus': { boxShadow: '0 0 0 2px #134559' },
});

type DateProps = {
  placeholder?: string,
  id: string,
  dateState: {
    date?: Date | null,
    setDate: (date?: Date | any) => void | any,
  }
};

const DataInput = ({placeholder, dateState, id}: DateProps) => {
  return (
    <InputStyled
      id={id}
      placeholderText={placeholder}
      selected={dateState.date}
      onChange={(date) => dateState.setDate(date)}
      selectsStart
      locale={ptBR}
      todayButton="Hoje"
      dateFormat="dd/MM/yyyy"
      disabledKeyboardNavigation
    />
  );
}

export default DataInput;