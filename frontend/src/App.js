import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Iniciosesion from './pages/Iniciosesion';
import Quienes from './pages/Quienes';
import Registro from './pages/Registro';
import Completado from './pages/Completado';
import Seguimiento from './pages/Seguimiento';
import Alertasg from './pages/Alertasg';
import Alertasc from './pages/Alertasc';
import AsisCoor from './pages/AsisCoor';
import MenuD from './pages/MenuD';
import MenuC from './pages/MenuC';
import AsisDoc from './pages/AsisDoc';
import Prueba from './pages/Prueba';
import AggEstudiante from './pages/AggEstudiante';
import AggGrupo from './pages/AggGrupo';
import CompletadoD from './pages/CompletadoD';
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
            <Route path="/alertasc" component={Alertasc} />
            <Route path="/alertasg" component={Alertasg} />
            <Route path="/asiscoor" component={AsisCoor} />
            <Route path="/menud" component={MenuD} />
            <Route path="/menuc" component={MenuC} />
            <Route path="/asisdoc" component={AsisDoc} />
            <Route path="/aggestudiante" component={AggEstudiante} />
            <Route path="/completadod" component={CompletadoD} />
            <Route path="/agggrupo" component={AggGrupo} />
            </Switch>
             </BrowserRouter>

    )
}

export default App;
