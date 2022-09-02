import { ESTADOS } from "./estados.enum";

export class Contacto {
  name = '';
  estado = ESTADOS.DESCONECTADO;

  constructor(name, estado) {
    this.name = name;
    this.estado = estado;
    
  }
  

}