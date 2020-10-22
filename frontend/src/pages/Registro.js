import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png';
class Login extends Component {
    
    render() {
        return (
          <>
  <div className="inicio">
   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col-6">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Registro</h1>
    <label for="inputEmail" className="sr-only mb-3">Nombre</label>
    <input type="text" id="inputEmail" className="form-control mb-3" placeholder="Nombre " required="" autofocus=""/>
    <label for="inputEmail" className="sr-only mb-3">Apellidos</label>
    <input type="text" id="inputEmail" className="form-control mb-3" placeholder="Apellidos " required="" autofocus=""/>
    <label for="inputEmail" className="sr-only mb-3">Apellidos</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Correo " required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Verificar contraseña" required=""/>
    
    <div className="checkbox mb-3">

    </div>
    <Link className="bot" to="iniciosesion">
    <button className="btn btn-lg btn-success btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
    <Link className="bot" to="">
    <button className="btn btn-lg btn-success btn-flex mb-3 col-6" type="submit">Regresar</button>
    </Link>
    
    
    </form>
  </div>
  </div>
</>

          ); 
        }
    }


 
export default Login;