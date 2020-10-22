import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>
<<<<<<< HEAD
   <div className="iniciosesion">
   <div className="container align-items-center mt-5 text-center">
    <form className="botinicio">
    <h1 className="h3 mb-5 font-weight-normal text-center ">S.A.P.Felix</h1>
    <div className="inicio">
    <img className="photo" src={logo}/>
    <Link to="xd">
=======
          <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SAPFelix</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">
      <Link to="/menu">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Inicio</button>
    </Link>
        </a></li>
      <li><a href="#"><Link to="/QuienesSomos.js">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">¿Quienes Somos?</button>
    </Link></a></li>
      <li><a href="#">Acerca de</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span>
      <Link to="/iniciosesion.js">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
      </a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Registrarse</a></li>
    </ul>
  </div>
</nav>
   <div className="inicio">
   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col-6">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Inicie Sesión</h1>
    <label for="inputEmail" className="sr-only mb-3">Documentode identidad</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email " required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/>Recordar</label>
    </div>
    <Link to="/menu">
>>>>>>> 3d2ca64a13eec64268793d281eb1c6d289d7d902
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
    </div>
    <div className="inicio"></div>
    <Link to="xd">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Registrarse</button>
    </Link>
    </form>
  </div>
  
  </div>
</>

          ); 
        }
    }


 
export default Login;