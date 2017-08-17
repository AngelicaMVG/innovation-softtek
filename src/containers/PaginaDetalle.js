import React, {Component} from 'react';
import {Col, Row, Card, Icon} from 'react-materialize';
import NavPrincipal from '../components/NavPrincipal';
import '../css/NavDetalle.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ContenidoDetalle from '../components/ContenidoDetalle';
import AnalyticsLikes from './AnalyticsLikes';
import AnalyticsMap from './AnalyticsMap';
import ImgDetalle from './ImgDetalle';
import "../css/PaginaDetalle.css";

export default class PaginaDetalle extends Component {
  render() {
    return (
      <div>
        <Row>
          <NavPrincipal/>
        </Row>
        <Row>
          <Col m={1}>

            <div className="sidebarDetalle" role="navigation">
              <div className="sidebar_nav_detalle">
                <ul className="nav nav-stacked espacioNav">
                  <li className="espacio center">
                    <Link to={process.env.PUBLIC_URL + "/pantallaDetalle/detalle"}>
                      <Icon medium>web</Icon>
                    </Link>
                  </li>
                  <li className="espacio center">
                    <Link to={process.env.PUBLIC_URL + "/pantallaDetalle/grafica"}>
                      <Icon medium>equalizer</Icon>
                    </Link>
                  </li>
                  <li className="espacio center">
                    <Link to={process.env.PUBLIC_URL + "/pantallaDetalle/mapa"}>
                      <Icon medium>public</Icon>
                    </Link>
                  </li>
                  <li className="espacio center">
                    <Link to={process.env.PUBLIC_URL + "/pantallaDetalle/archivosAdjuntos"}>
                      <Icon medium>attach_file</Icon>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </Col>
          <Col m={8} className="margenTopDetalle">
            <Switch>
              <Route path="/pantallaDetalle/detalle" component={ContenidoDetalle}/>
              <Route path="/pantallaDetalle/grafica" component={AnalyticsLikes}/>
              <Route path="/pantallaDetalle/mapa" component={AnalyticsMap}/>
              <Route path="/pantallaDetalle/archivosAdjuntos" component={ImgDetalle}/>
            </Switch>
          </Col>
          <Col m={3} className="margenTopDetalle">
            <Col m={12} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Equipo de trabajo'>
                Quienes han contribuido a este Reto.
              </Card>
            </Col>
          </Col>
          <Col m={3} className="margenTopDetalle">
            <Col m={12} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Organigrama'>
                Publicaciones relacionadas
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}
