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
  <h1 >Ver asistencias</h1>
  <h2>11°1</h2>
<div>
<p>Jose Alejandro Lopez Rojas</p> 
<p>Asistio</p>
<p></p>
<p>Kevin Alexander Guzman</p>
<p>No asistio</p>
<p></p>
<p>Juana Velasquez Tobon</p>
<p>Llego tarde</p>
<p></p>
<p>Jose Alejandro Gonzales Villa</p>
<p>Asistio</p>
<p></p>
<p>Marta Irene Gomez</p>
<p>No asistio</p>
<p></p>
</div>

<div>
<p>25-10-2020</p>
</div>

<div>
<Link to="Alertasc">
    <button className="btn btn-lg btn-success btncustom" type="submit">Regresar</button>
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