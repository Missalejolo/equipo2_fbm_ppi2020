import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png';
class Login extends Component {
    
    render() {
        return (
          <>
  
  <div className="container">
   <div className="row justify-content-center align-items-center minh-100">
    <form className="form-signin text-center align-items-center col-10">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Registro</h1>
    <label for="inputEmail" className="sr-only mb-3">Nombre</label>
    <input type="text" id="inputEmail" className="form-control mb-3" placeholder="Nombre " required="" autofocus=""/>
    <label for="inputEmail" className="sr-only mb-3">Apellidos</label>
    
    <input type="text" id="inputEmail" className="form-control mb-3" placeholder="Apellidos " required="" autofocus=""/>
    <label for="inputEmail" className="sr-only mb-3">Correo</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Correo " required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">vContraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Verificar contraseña" required=""/>
    
    <div></div>
    <Link to="iniciosesion">
    <button className="btn btn-lg btn-success btncustom" type="submit">Registrarse</button>
    </Link>
    <div></div>
    <Link to="">
    <button className="btn btn-lg btn-success btncustom" type="submit">Regresar</button>
    </Link>
    
    
    </form>
  </div>
  </div>
</>

          ); 
        }
    }


 
export default Login;