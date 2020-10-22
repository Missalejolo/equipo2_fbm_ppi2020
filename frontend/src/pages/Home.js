import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>
   <div className="botones">
   <div className="container align-items-center mt-5 text-center">
    <form className="botinicio">
    <h1 className="h3 mb-5 font-weight-normal text-center ">S.A.P.Felix</h1>
    <img className="photo" src={logo}/>
    <div className="boton">
    
    <Link to="iniciosesion">
    <button className="btn btn-lg btn-success btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
    
    <div className="boton"></div>
    <Link to="registro">
    <button className="btn btn-lg btn-success btn-flex mb-3 col-6" type="submit">Registrarse</button>
    </Link>
    <Link className="acerca" to="">
    <button className="" type="submit">?</button>
    </Link>
    </div>
    </form>
  </div>
  
  </div>
</>

          ); 
        }
    }


 
export default Login;