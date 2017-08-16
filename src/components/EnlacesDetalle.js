import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContenidoDetalle from  './ContenidoDetalle';
import AnalyticsLikes from  '../containers/AnalyticsLikes';
import AnalyticsMap from  '../containers/AnalyticsMap';
import imgDetalle from '../home.PNG';

export default class EnlacesDetalle extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route path="/detalles" exact component={ContenidoDetalle}/>
                    <Route path="/grafica" component={AnalyticsLikes}/>
                    <Route path="/mapa" component={AnalyticsMap}/>
                    <Route path="/archivosAdjuntos" component={imgDetalle}/>
                </div>
            </Router>
        )
    }
}