import React , {Component} from 'react';
import {Col, Row} from 'react-materialize';
import TarjetaPublicacion from '../components/TarjetaPublicacion';

export default class ContenedorNecesidades extends Component {
  render(){
    return(
      <div>
        <Col m={4}>
          <Col m={12}>
            <h3 className='center'>Recientes</h3>
            <TarjetaPublicacion
              titulo='Optimizacion'
              tipo='Necesidad' background='yellow'
              time='13 días'
              location='GDC Monterrey'
              descripcion='método para determinar los valores de las variables que intervienen en un proceso o sistema para que el resultado sea el mejor posible'/>
          </Col>
        </Col>
        <Col m={4}>
          <Col m={12}>
            <h3 className='center'> Populares</h3>
            <TarjetaPublicacion
              titulo='Calculo ISR'
              tipo='Necesidad' background='yellow'
              time='2 semanas'
              location='GDC CDMX'
              descripcion='Realizar el calculo manual del ISR de cada empleado de Softek es una tarea eterna y tediosa'/>
          </Col>
        </Col>
        <Col m={4}>
          <Col m={12}>
            <h3 className='center'>Sugerencias</h3>
            <TarjetaPublicacion
              titulo='Organizacion'
              tipo='Necesidad' background='yellow'
              time='3 días'
              location='GDC Brasil'
              descripcion='Queremos uma agenda virtual para melhor organizar actividades recrativas.'/>
          </Col>
        </Col>
        <Col m={4}>
          <Col m={12}>
            <h3 className='center'>Sugerencias</h3>
            <TarjetaPublicacion
              titulo='Organizacion'
              tipo='Necesidad' background='yellow'
              time='3 días'
              location='GDC USA'
              descripcion='Automate control of employee attendance.'/>
          </Col>
        </Col>
        <Col m={4}>
          <Col m={12}>
            <h3 className='center'>Sugerencias</h3>
            <TarjetaPublicacion
              titulo='Organizacion'
              tipo='Necesidad' background='yellow'
              time='9 días'
              location='GDC Italia'
              descripcion='Un processo che accelera la registrazione dei visitatori alla costruzione'/>
          </Col>
        </Col>
      </div>
    )
  }
}
