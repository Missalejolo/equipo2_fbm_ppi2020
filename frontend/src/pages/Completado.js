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
      <h3>La operación se ha completado con éxito</h3>
      <Link className="bot" to="AsisDoc">  
<button className="btn btn-lg btn-success asistio btncustom" type="submit">Continuar</button> <br></br>
</Link>
     </form>
     </div>
   </div>
  
</>

          ); 
        }
    }


 
export default Login;