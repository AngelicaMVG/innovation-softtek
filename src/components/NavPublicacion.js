import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavPublicacion.css';

export default class NavPublicacion extends Component {
    render(){
        return(
            <div id="sidebar-publicacion" role="navigation">
                <div id="sidebar-nav-publicacion">
                    <ul className="nav nav-stacked">
                        <li className="texto-vertical espacioPorElemento1"><Link to={public.env.URL + "/home/ideas"} className="fontSize">Idea</Link></li>
                        <li className="texto-vertical espacioPorElemento"><Link to={public.env.URL + "/home/necesidades"} className="fontSize">Necesidad</Link></li>
                        <li className="texto-vertical espacioPorElemento"><Link to={public.env.URL + "/home/retos"} className="fontSize"> Reto</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
