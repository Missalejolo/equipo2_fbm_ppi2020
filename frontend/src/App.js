import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
<<<<<<< HEAD

import Iniciosesion from './pages/iniciosesion';
=======
import Home from './pages/Patata';
import Iniciosesion from './pages/Iniciosesion';
>>>>>>> 875eca844df1b77adbea5d1e9d742c8cd1ee1959
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
