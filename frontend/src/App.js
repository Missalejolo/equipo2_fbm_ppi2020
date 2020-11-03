import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Iniciosesion from './pages/Iniciosesion';
import Quienes from './pages/Quienes';
import Registro from './pages/Registro';
import Completado from './pages/Completado';
import Home from './pages/Home'
import Seguimiento from './pages/Segumiento';


import Prueba from './pages/Prueba';
const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/iniciosesion" component={Iniciosesion} />
            <Route path="/quienes" component={Quienes} />
            <Route path="/registro" component={Registro} />
            <Route path="/prueba" component={Prueba} />
            <Route path="/seguimiento" component={Seguimiento} />
            <Route path="/completado" component={Completado} />
            </Switch>
             </BrowserRouter>

    )
}

export default App;
