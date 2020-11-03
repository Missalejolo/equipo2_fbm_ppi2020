import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <> <div className="Tseg">
            <h1>Seguimiento</h1>

          </div>
          <h2 className="op">La operación se ha completado de manera exitosa</h2>
          <div className="row justify-content-center align-items-center minh-100">
          <form className="form-signin text-center align-items-center col-10"></form>
          <button className="btn btn-lg btn-success Continuar btncustom" type="submit">Continuar</button> <br></br>
           </div>
  
</>

          ); 
        }
    }


 
export default Login;