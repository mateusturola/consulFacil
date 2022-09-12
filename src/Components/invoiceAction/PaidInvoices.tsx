import { CheckCircledIcon } from '@radix-ui/react-icons';
import InvoicesContext from 'Context/InvoicesContext';
import UserContext from 'Context/UserContext';
import useAxios from 'Hooks/useAxios';
import { useContext, useEffect } from 'react';
import { styled } from '../../../stitches.config';

type Props = {
  id: number,
  patientProp: string,
  amountProp: string,
  dateProp: string,
  paidProp: boolean
};

const IconButton = styled(CheckCircledIcon, {
  all: 'unset',
  height: '20px',
  width: '20px',
});

const ButtonPaid = styled('button', {
  all: 'unset',
});

const PaidInvoices = ({patientProp, amountProp, dateProp, id, paidProp }: Props) => {

  const { setInvoices, setLoading, setErrorMessage, loading: StateLoading } = useContext(InvoicesContext);
  const { token } = useContext(UserContext);

  const url = `/invoice/${id}`;

  const { response, loading, error, sendData, setError } = useAxios({
    method: "put",
    url: url,
    headers: {
      accept: '*/*',
      Authorization: token
    },
    data: {patient: patientProp, date: dateProp , amount: amountProp, paid: !paidProp}
  });

  useEffect(() => {
    if (response?.data) {
      setInvoices(response?.data);
      setErrorMessage('');
      setLoading(false);
    } else if (error) {
      setErrorMessage(error.response?.data.message);
      setLoading(false);
    }
  } , [response, error, loading ]);

  const handleClick = (e: any) => {
    e.preventDefault();
    sendData();
    setLoading(true);
  }

  return  (
    <>
      <ButtonPaid type='button' onClick={handleClick}><IconButton /></ButtonPaid>
    </>
  )
}


export default PaidInvoices;