import { CheckCircledIcon } from '@radix-ui/react-icons';
import Loading from 'Components/generic/Loading';
import InvoicesContext from 'Context/InvoicesContext';
import UserContext from 'Context/UserContext';
import useAxios from 'Hooks/useAxios';
import React, { useContext, useEffect } from 'react';
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
  height: '18px',
  width: '18px',
});

const ButtonDelete = styled('button', {
  all: 'unset',
});

const PaidInvoices = ({patientProp, amountProp, dateProp, id, paidProp }: Props) => {

  const { setFilteredInvoice, setLoading, setErrorMessage, loading: StateLoading } = useContext(InvoicesContext);
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
    if (error) {
      setErrorMessage(error.response?.data.message);
    } else {
      setFilteredInvoice(response?.data);
      setErrorMessage('');
      setLoading(false);
    }
  } , [response, error, loading ]);

  const handleClick = (e) => {
    e.preventDefault();
    sendData();
    setLoading(true);
  }

  return  (
    <>
      { StateLoading && <Loading />  }
      <ButtonDelete type='button' onClick={handleClick}><IconButton /></ButtonDelete>
    </>
  )
}


export default PaidInvoices;