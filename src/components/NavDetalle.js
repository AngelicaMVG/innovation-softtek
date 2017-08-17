import React, { Component } from 'react';
import '../css/NavDetalle.css';
import {Icon} from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class NavDetalle extends Component {
    render(){
        return(
            <Router>
                <div className="sidebarDetalle" role="navigation">
                    <div className="sidebar_nav_detalle">
                        <ul className="nav nav-stacked espacioNav">
                            <li className="espacio center"><Link to={process.env.PUBLIC_URL + "/pantallaDetalle/detalle"}><Icon medium>web</Icon></Link></li>
                            <li className="espacio center"><Link to={process.env.PUBLIC_URL + "/pantallaDetalle/grafica"}><Icon medium>equalizer</Icon></Link></li>
                            <li className="espacio center"><Link to={process.env.PUBLIC_URL + "/mapa"}><Icon medium>public</Icon></Link></li>
                            <li className="espacio center"><Link to={process.env.PUBLIC_URL + "/pantallaDetalle/imgDetalle"}><Icon medium>attach_file</Icon></Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}
