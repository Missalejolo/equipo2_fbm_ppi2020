import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>
   
   
   <div className="container">
   <div className="row justify-content-center align-items-center minh-100">
    <form className="form-signin text-center align-items-center col-10">
    <h1 className="h3 mb-5 font-weight-normal text-center ">S.A.P.Felix</h1>
    <img className="photo" src={logo}/>
    
    <div>
    <Link className="bot" to="iniciosesion">
    <button className="btn btn-lg btn-success btncustom" type="submit">Iniciar sesion</button>
    </Link>
    <div></div>
    <Link className="bot" to="registro">
    <button className="btn btn-lg btn-success btncustom" type="submit">Registrarse</button>
    </Link>
    </div>
    </form>
  </div>
  <Link className="acerca" to="quienes">
    <button className="" type="submit">?</button>
    </Link>
  </div>
</>

          ); 
        }
    }


 
export default Login;