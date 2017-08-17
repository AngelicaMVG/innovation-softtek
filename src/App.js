import React, { Component } from 'react';
import './css/App.css';
import PagInicio from './containers/PagInicio';
import Home from './containers/Home';
import PaginaDetalle from './containers/PaginaDetalle';
import PaginaReto from './containers/PaginaReto';
import PaginaTag from './containers/PaginaTag';
import PaginaUsuario from './containers/PaginaUsuario';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
        <Route exact path ={process.env.PUBLIC_URL + '/'} component={PagInicio}/>
        <Route  path ={process.env.PUBLIC_URL + '/home'} component={Home}/>
        <Route  path ={process.env.PUBLIC_URL + '/pantallaDetalle'} component={PaginaDetalle}/>
        <Route  path ={process.env.PUBLIC_URL + '/paginaReto'} component={PaginaReto}/>
        <Route  path ={process.env.PUBLIC_URL + '/paginaTag'} component={PaginaTag}/>
        <Route  path ={process.env.PUBLIC_URL + '/paginaUsuario'} component={PaginaUsuario}/>
      </div>
    </Router>

      </div>
    )
  }
}

export default App;
