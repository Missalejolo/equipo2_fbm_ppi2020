import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Iniciosesion from './pages/Iniciosesion';
import Quienes from './pages/Quienes';
import Registro from './pages/Registro';
const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/iniciosesion" component={Iniciosesion} />
            <Route path="/quienes" component={Quienes} />
            <Route path="/registro" component={Registro} />
            </Switch>
             </BrowserRouter>

    )
}

export default App;
