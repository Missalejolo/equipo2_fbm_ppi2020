import React from 'react';
<<<<<<< HEAD


function App() {
  return (
    <div className="App">
    <h1>SAPfelix</h1>
    </div>
  );
=======
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Iniciosesion from './pages/Iniciosesion';
import Quienes from './pages/Quienes';
import Registro from './pages/Registro';

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
            </Switch>
             </BrowserRouter>

    )
>>>>>>> 249c2c156a2fe40368b9293d545ace5fa6a1dbd9
}

export default App;
