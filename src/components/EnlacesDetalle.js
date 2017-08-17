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
                    <Route path={process.env.PUBLIC_URL + "/detalles"} exact component={ContenidoDetalle}/>
                    <Route path={process.env.PUBLIC_URL + "/grafica"} component={AnalyticsLikes}/>
                    <Route path={process.env.PUBLIC_URL + "/mapa"} component={AnalyticsMap}/>
                    <Route path={process.env.PUBLIC_URL + "/archivosAdjuntos"} component={imgDetalle}/>
                </div>
            </Router>
        )
    }
}
