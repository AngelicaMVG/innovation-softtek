import React,{Component} from 'react';
import NavPrincipal from '../components/NavPrincipal';
import TarjetaPublicacion from '../components/TarjetaPublicacion';
import '../css/PaginaUsuario.css';
import {Col,Row,Button} from 'react-materialize';


export default class PaginaTag extends Component{
  render(){
    return(
        <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
            <Col m={10} offset="m1" className="espacioSuperior">
                <h4 className="col m10">Ideas Related to:<b className="etiqueta">React</b></h4> 
                <Button waves='light' className="col m1">Follow</Button>
            </Col>
        </Row>
        <Row>
          <Col m={3}>
            <TarjetaPublicacion titulo='Queues Report'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='13 días'
            location='GDC Monterrey'
            descripcion='Reporte Norte y enlaces de queues para las oficinas centrales. React es importante. '/>
            <TarjetaPublicacion titulo='React innovation'
            tipo='Necesidad' background='yellow'
            time='1 mes'
            location='GDC Gdl'
            descripcion='Seria importante poder tener una certificación en React para los nuevos proyectos en el area de Innovation.'/>
          </Col>
          <Col m={3}>
            <TarjetaPublicacion titulo='React Jobs'
            tipo='Necesidad' background='yellow'
            time='1 mes'
            location='GDC Mexico'
            descripcion='Monitoreo de Jobs de React para las areas respectivas...'/>
            <TarjetaPublicacion titulo='Creando con react'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='13 días'
            location='GDC Monterrey'
            descripcion='Proponemos en Monterrey que los nuevos proyectos sean desarrollados con React'/>
          </Col>
          <Col m={3}>
            <TarjetaPublicacion titulo='Titanium OCR'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='1 mes'
            location='GDC USA'
            descripcion='A set of functions that analyze screenshot image and read the text from it, givon some useful uniformation like - The complete set of lines that are displayed- react that contains a given string.'/>
            <TarjetaPublicacion titulo='Plataforma nueva con react'
            tipo='Necesidad' background='yellow'
            time='1 mes'
            location='GDC Mexico'
            descripcion='Se propone la creacion de una aplicacion en donde se puedan publicar ideas, necesides y retos dentro de la web interna de Softtek.'/>
          </Col>
          <Col m={3}>
            <TarjetaPublicacion titulo='Proyeccion de Cobranza'
            tipo='Reto' background='red'
            time='1 mes'
            location='GDC Mexico'
            descripcion='Crear una base de datos para el area de finanzas, la base de datos debera formar parte de una aplicacion desarrollada en react para una mejor fluidez de informacion'/>
            <TarjetaPublicacion titulo='Identificacion de pedidos'
            tipo='Idea' background='rgb(71, 168, 199)'
            time='1 mes'
            location='GDC Mexico'
            descripcion='Se propone la creacion de una aplicacion en donde se puedan publicar ideas, necesides y retos dentro de la web interna de Softtek'/>
          </Col>
        </Row>
      </div>
    )
  }
}
