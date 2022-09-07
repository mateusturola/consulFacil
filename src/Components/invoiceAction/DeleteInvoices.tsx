import { IconJarLogoIcon, TrashIcon } from '@radix-ui/react-icons';
import Loading from 'Components/generic/Loading';
import InvoicesContext from 'Context/InvoicesContext';
import UserContext from 'Context/UserContext';
import useAxios from 'Hooks/useAxios';
import React, { useContext, useEffect } from 'react';
import { styled } from '../../../stitches.config';

type Props = {
  id: number;
};

const IconButton = styled(TrashIcon, {
  all: 'unset',
  height: '18px',
  width: '18px',
});

const ButtonDelete = styled('button', {
  all: 'unset',
});

const DeleteInvoices = ({id}:Props) => {

  const {setLoading, setFilteredInvoice, loading: StateLoading} = useContext(InvoicesContext);

  const { token } = useContext(UserContext);

  const url = `/invoice/${id}`;

  const { response, loading, error, sendData } = useAxios({
    method: "delete",
    url: url,
    headers: {
      accept: '*/*',
      Authorization: token
    },
  });

  useEffect(() => {
    if (response?.data) {
      setFilteredInvoice(response?.data);
      setLoading(false);
    } else if (error) {
      console.log(error);
    }
    setLoading(false);
  }, [error, response, loading]);


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


export default DeleteInvoices;