import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import { ESTADOS } from '../../models/estados.enum';

const contactoComponent = ({contacto, cambioestado, eliminar}) => {

  // Retorna una medalla dependiendo del nivel de la tarea
  function contactoEstadoBadge() {
    switch (contacto.estado) {
      case ESTADOS.CONECTADO:
        return(
        <h6 className='mb-0'>
          <span className='badge bg-success'>
            {contacto.estado}
          </span>
        </h6>);
    
      case ESTADOS.DESCONECTADO:
        return(
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {contacto.estado}
            </span>
          </h6>);

      default:
        break;
    }
  }
      // Retorna iconos dependiendo de la completitud de la tarea
  function contactoIconoEstado() {
    if(contacto.completed){
      return(<i onClick={() => cambioestado(contacto)} className='bi-toggle-on contacto-action' style={{color: 'green'}}></i>);
    }
      else{
        return(<i onClick={() => cambioestado(contacto)}  className='bi-toggle-off contacto-action' style={{color: 'gray'}}></i>);
      }
    }

  
  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{contacto.name}</span>
      </th>
      <td className='align-middle'>
        {/* Ejecuta la funcion que retorna un elemento medalla */}
        {contactoEstadoBadge()}

      </td>
      <td className='align-middle'>
        {/* Ejecuta la funcion que retorna un icono distinto dependiendo si fue completada o no la tarea */}
        {contactoIconoEstado()}
        <i onClick={() => eliminar(contacto)} className='bi-trash contacto-action' style={{color: 'tomato', fontSize: '20px'}}></i>
      </td>    
    </tr>
  );
};


contactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  cambioestado: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired
};


export default contactoComponent;
