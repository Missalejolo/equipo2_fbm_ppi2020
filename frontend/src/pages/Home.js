import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>
   <div className="iniciosesion">
   <div className="container align-items-center mt-5 text-center">
    <form className="botinicio">
    <h1 className="h3 mb-5 font-weight-normal text-center ">S.A.P.Felix</h1>
    <div className="inicio">
    <img className="photo" src={logo}/>
    <Link to="xd">
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