import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png';
import Est from '../imagenes/Est.png';
class Login extends Component {
    
    render() {
        return (
          
          <><div className="containertit">
            <h1 > Administrar grupo</h1>
            </div>
           
            <h2 className="h2seg">Seguimiento</h2>
            
            
             <div className="container">
    
             <div className="row justify-content-center align-items-center minh-100">
             <form className="form-signin text-center align-items-center col-10">
               <img className="clase" src={Est}width="150" height="150"align="center"/><br></br>
               <h3>Juana Velásquez Tobón</h3><br></br>
              <button className="btn btn-lg btn-success asistio btncustom" type="submit">asistió</button> <br></br> 
              <button className="btn btn-lg btn-danger no  btncustom" type="submit">No asistió</button>  <br></br>
              <button className="btn btn-lg btn-warning  tarde btncustom" type="submit">Llegó tarde</button>
              </form>
              </div>
            </div>
</>

          ); 
        }
    }


 
export default Login;