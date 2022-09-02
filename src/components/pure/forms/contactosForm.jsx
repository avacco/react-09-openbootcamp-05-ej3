import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Contacto } from '../../../models/contacto.class';

const ContactosForm = ({add}) => {

  const nombreRef = useRef('');

  function addContacto(e) {
    e.preventDefault();
    const newContacto = new Contacto(
        nombreRef.current.value,
    );
    add(newContacto);
  }

  return (
    <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill '>
        <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre del contacto'/>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>Añadir</button>
    </form>
  );
}

ContactosForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default ContactosForm;
