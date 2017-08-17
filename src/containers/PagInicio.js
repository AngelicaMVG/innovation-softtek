import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Icon, Input} from 'react-materialize';
import logo from '../softtek.png'
import '../css/NavPrincipal.css';

export default class PagInicio extends Component {
  render() {
    return (
      <div>
        <Row>
          <nav className='nav--height'>
            <Row className="nav-wrapper white grey-text">
              <Col s={1}>
                <a href='http://www.softtek.com/' target='_blank' className='brand-logo '><img className='img-logo' src={logo} alt=""/></a>
              </Col>
              <Col s={3} offset='s8'>
                <h5 className='signIn'>Registrarse</h5>
              </Col>
            </Row>
          </nav>
        </Row>
        <Row className='contenedor'>
          <Col m={3} className='form-inicio'>
            <div>
              <Row>
                <h4 className='center'>Inicio de Sesión</h4>
                <Input id='email' s={12} label=" Correo"  type='email'  validate >
                  <Icon>mail_outline</Icon>
                </Input>
                <Input id='contrasena' s={12} label="Contraseña" validate type='password'>
                  <Icon>lock_outline</Icon>
                </Input>
                <Link to={process.env.PUBLIC_URL + '/home/ideas'}>
                  <a id='submit' type="submit" className='btn btn-signUp-verde'>Iniciar Sesión</a>
                </Link>
              </Row>
            </div>
          </Col>
        </Row>

      </div>
    )
  }
}
