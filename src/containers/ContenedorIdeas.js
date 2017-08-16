import React , {Component} from 'react';
import {Col, Row} from 'react-materialize';
import TarjetaPublicacion from '../components/TarjetaPublicacion';

export default class ContenedorIdeas extends Component {
  render(){
    return(
      <div>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'>Recientes</h3>
          <TarjetaPublicacion
            titulo='Reporte Historico'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='1 días'
            location='GDC Guadalajara'
            descripcion='Programa para automatizar excel.'
            comment='0'
            like='2'
            clip='0'/>
            <TarjetaPublicacion
              titulo='Monitoreo de varios sistemas.'
              tipo='Idea' background='rgb(71, 168, 199)'
              time='2 días'
              location='GDC Aguascalientes'
              descripcion='Como revisamos varios sistemas todo el turno y tenemos que estar al tanto
              de ellos por las alertas.Encontre una buena extensión en Chrome.'
              comment='9'
              like='8'
              clip='1'/>
        </Col>
      </Col>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'> Populares</h3>
          <TarjetaPublicacion
            titulo='Draft Manual'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='3 días'
            location='GDC Monterrey'
            descripcion='Programa para correr el reporte de excel.'
            comment='13'
            like='43'
            clip='7'/>
            <TarjetaPublicacion
              titulo='Queues Report'
              tipo='Idea' background='rgb(71, 168, 199)'
              time='15 días'
              location='GDC CDMX'
              descripcion='Reporte Norte y enlace de queues.'
              comment='20'
              like='20'
              clip='0'/>
        </Col>
      </Col>
      <Col m={4}>
        <Col m={12}>
          <h3 className='center'>Sugerencias</h3>
          <TarjetaPublicacion
            titulo='NaturaIXL'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='11 días'
            location='GDC E.U.'
            descripcion='Something like a scripting language to perfom actions on Excel files using Natural languege'
            comment='3'
            like='9'
            clip='8'/>
            <TarjetaPublicacion
              titulo='Reporte Historico'
              tipo='Idea' background='rgb(71, 168, 199)'
              time='1 días'
              location='GDC Guadalajara'
              descripcion='Programa para automatizar excel.'
              comment='0'
              like='2'
              clip='0'/>
        </Col>
      </Col>
      </div>
    )
  }
}
