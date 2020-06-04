import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/formulario' exact />
          <Route path='/listado' exact />
        </Switch>
      </BrowserRouter>
    );
  }
}