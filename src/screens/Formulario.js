import React, { useState } from 'react';
import useStyles from '../styles/general';
import logo from '../kranio.png';
import Button from '@material-ui/core/Button';
import ClientDataService from '../services/ServicesClient';
import FormClient from '../component/FormClient';
import SwitchControl from '../component/SwitchControl';
import { data } from '../configurations/form_client';
import { initialClientState, dataFill } from '../configurations/data_configuration';
import ErrorComponent from '../component/ErrorComponent';
import SuccessComponent from '../component/SuccessComponent';

const Formulario = () => {
  const [client, setClient] = useState(initialClientState);
  const [checkedA, setCheckedA] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorStatusComment, setErrorStatusComment] = useState('');
  const [successStatus, setSuccessStatus] = useState(false);
  const [successStatusComment, setSuccessStatusComment] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };

  const handleClose = event => {
    setErrorStatus(!errorStatus);
  };

  const handleSuccessClose = event => {
    setSuccessStatusComment(!successStatusComment);
  };

  const handleCheck = event => {
    setCheckedA(!checkedA);
    setClient({ ...client, tiene_tarjeta: !checkedA });
  };

  const saveClient = () => {
    var data = dataFill(client);

    ClientDataService.create(data)
      .then(response => {
        console.log(response)
        setClient(dataFill(response.data));
        setSuccessStatus(true);
      })
      .catch(e => {
        setErrorStatus(true);
        setErrorStatusComment(String(e));
        console.log(e);
      });
  };

  const {
    webinarContainer,
    webinarHeader,
    logoStyle,
    webinarBody
  } = useStyles();

  return (
    <div className={webinarContainer}>
      <header className={webinarHeader}>
        <img src={logo} className={logoStyle} alt='logo' />
      </header>
      <div className={webinarBody}>
        <form className='her' noValidate autoComplete='off'>
          <FormClient formData={data} client={client} onChange={handleInputChange} />
          <SwitchControl checkedA={checkedA} onChange={handleCheck} />
        </form>
        <Button variant='contained' color='secondary' onClick={saveClient} >
          Enviar
        </Button>
        {
          errorStatus && <ErrorComponent open={errorStatus} handleClose={handleClose} commentStatus={errorStatusComment} />
        }
        {
          successStatus && <SuccessComponent open={successStatus} handleClose={handleSuccessClose} commentStatus={successStatusComment} />
        }
      </div>
    </div>
  );
}

export default Formulario;
