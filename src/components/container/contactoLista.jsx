import React, { useEffect, useState } from 'react';
import { ESTADOS } from '../../models/estados.enum';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

import '../../styles/contacto.scss';
import ContactoForm from '../pure/forms/contactosForm';

const ContactoListaComponent = () => {
 
  const defaultContacto1 = new Contacto('Ejemplo 1', ESTADOS.DESCONECTADO);
  const defaultContacto2 = new Contacto('Ejemplo 2', ESTADOS.CONECTADO);

  
  // Estado del componente
  const [contactos, setContactos] = useState([defaultContacto1,defaultContacto2]);
  
  const cambiarEstado = (contacto) => {
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    if(tempContactos[index].estado == ESTADOS.CONECTADO){
      tempContactos[index].estado = ESTADOS.DESCONECTADO;
    } else {
      tempContactos[index].estado = ESTADOS.CONECTADO;
    }
    setContactos(tempContactos);
  }

  const eliminarContacto = (contacto) => {
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos.splice(index,1);
    setContactos(tempContactos);
  }

  const addContacto = (contacto) => {
    contacto.estado = ESTADOS.DESCONECTADO;
    const tempContactos = [...contactos];
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }



  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Contactos:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            <table className='table table-striped'>
              <thead>  
                <tr>
                  <th scope='col'>Nombre</th>
                  <th scope='col'>Estado</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                { contactos.map((contacto, index) => {
                  return (
                    <ContactoComponent key={index} contacto={contacto} cambioestado={cambiarEstado} eliminar={eliminarContacto}/>
                  )
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactoForm add={addContacto}/>
    </div>
  );
};

export default ContactoListaComponent;
