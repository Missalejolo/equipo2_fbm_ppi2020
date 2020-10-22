import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 

class Login extends Component {
    
    render() {
        return (
          <>
   <div className="pag2">
   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col-6">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Inicie Sesión</h1>
    <label for="inputEmail" className="sr-only mb-3">Documentode identidad</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email " required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me</label>
    </div>
    <Link to="/menu">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
    
    </form>
  </div>
  </div>
</>

          ); 
        }
    }


 
export default Login;