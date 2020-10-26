import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 

class Login extends Component {
    
    render() {
        return (
          
          <>
  <div className="nav">
    <Link className="bot" to="prueba">
    <button className="btn btn-lg btn-success btnnav" type="submit">Iniciar Sesión</button>
    </Link>
    <Link className="bot" to="prueba">
    <button className="btn btn-lg btn-success btnnav" type="submit">Iniciar Sesión</button>
    </Link>
    </div>
</>

          ); 
        }
    }


 
export default Login;