import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>
  <div className="container">   
  <h1 >Ver asistencias</h1>
  <h2>11*1</h2>
  </div>
<div className="Estudiantes">
<p>Jose alejandro lopez Rojas</p> 
<p>Kevin Alexander Guzman</p>
<p>Juana velasques Tobon</p>
<p>Jose Alejandro Gonzales Villa</p>
<p>Marta Irene Gomez</p>
</div>
  

<div className="Asistencias">
<p>Asistio</p>
<p>No asistio</p>
<p>Llego tarde</p>
<p>Asistio</p>
<p>No asistio</p>
</div>

<div>
<p>25-10-2020</p>
</div>

<div>
<Link to="">
    <button className="btn btn-lg btn-success btncustom" type="submit">Regresar</button>
    </Link>
</div>
 
</>

          ); 
        }
    }


 
export default Login;