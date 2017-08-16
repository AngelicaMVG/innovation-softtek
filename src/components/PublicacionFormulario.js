import React from "react";
import {Row, Input} from 'react-materialize'
import "../css/PublicacionFormulario.css";
import "../css/NavPrincipal.css";


export default class PublicacionFormulario extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <form >
            <div className="switch bold col s4 offset-s8">
              <label>
              Hacer una idea privada
              <input type="checkbox" />
              <span className="lever"></span>
              </label>
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Título</p>
              <input id="titulo" type="text" className="validate" />
            </div>
            <div className="input-field col s10 offset-s1">
              <p className="center bold margin0">Descripción</p>
              <input id="descripcion" className=""/>
            </div>
            <Row className="col s5 offset-s1">
              <Input s={10} type='select' id="select-idea">
                <option value='0'>Idea</option>
                <option value='1'>Aplicación</option>
                <option value='2'>POC</option>
                <option value='3'>Microservicio</option>
                <option value='4'>Otro</option>
              </Input>
            </Row>
            <Row className="col s5 offset-s1">
              <Input s={10} type='select' id="select-necesidad">
                <option value='0'>Necesidad</option>
                <option value='1'>Aplicación</option>
                <option value='2'>POC</option>
                <option value='3'>Microservicio</option>
                <option value='4'>Otro</option>
              </Input>
            </Row>
            <div className="input-field col s10 offset-s1">
              <p className="center bold">Etiquetas (Agrega una etiqueta y presiona 'enter')</p>
              <input id="etiquetas" type="text" className="validate" />
            </div>
            <div className="file-field input-field col s10 offset-s1">
              <div className="btn btn-verde">
                <span>Elegir archivos</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
