import React, { Component } from 'react';
import TarjetaDescripcion from '../components/TarjetaDescripcion';
import ContenedorComentario from './ContenedorComentario';
import '../css/PaginaUsuario.css'
import {Row} from 'react-materialize';
import NavPrincipal from '../components/NavPrincipal';
import Collapsible from './Collapsible';

export default class PaginaReto extends Component {
  render() {
    return (
      <div>
      <NavPrincipal />
      <Row>

      	<div className='col s10 offset-s1 espacioSuperior'>
            <TarjetaDescripcion />
            <Collapsible />
        </div>


      </Row>


      </div>
    );
  }
}
