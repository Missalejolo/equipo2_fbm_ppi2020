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
    <h1 className="h3 mb-5 font-weight-normal text-center ">Inicia sesion</h1>
    <label for="inputEmail" className="sr-only mb-3">Documentode identidad</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email" required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Recuerdame</label>
    </div>
    
    <div></div>
    <Link className="bot" to="menud">
    <button className="btn btn-lg btn-success btncustom" type="submit">Iniciar Sesión (Docente)</button>
    </Link>
    
    <div></div>
    <Link className="bot" to="menuc">
    <button className="btn btn-lg btn-success btncustom" type="submit">Iniciar Sesión (Coordinador)</button>
    </Link>
    <div></div>
    <Link className="bot" to="">
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