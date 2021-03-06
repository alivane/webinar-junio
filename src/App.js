import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Formulario from './screens/Formulario';
import Listado from './screens/Listado';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Formulario}/>
          <Route path='/listado' exact component={Listado}/>
        </Switch>
      </BrowserRouter>
    );
  }
}