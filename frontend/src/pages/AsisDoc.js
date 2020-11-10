import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>

<header>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  
 <a class="navbar-brand" href="#">Docente</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
   <div class="navbar-nav">
     
   <Link to="MenuD"><a class="nav-item nav-link" href="MenuD">Inicio</a></Link>
     <a class="nav-item nav-link active" href="Alertasg">Grupos<span class="sr-only">(current)</span></a>
   </div>
 </div>
 
</nav>
   
   </header>
          
  <div className="container">
  <div className="row justify-content-center align-items-center minh-100">
             <form className="form-signin text-center align-items-center col-10">
  <h1 >Ver asistencias</h1>
  <div className="row justify-content-center align-items-center minh-100">
    
  </div>
<div>
<Link to="Seguimiento"><a class="h4" href="Seguimiento">Juana Velasquez Tobon</a></Link>
</div>
  <h5>Jose Alejandro López Rojas</h5>
  <h5>Kevin Alexander Guzman Botero</h5>
  <h5>Jose Alejandro Gonzalez Villa</h5>
<hr></hr>
<div>


<h6>25-10-2020</h6>
</div>
<Link to="AggEstudiante">
    <button className="btn btn-lg btn-primary btncustom" type="submit">Agregar estudiante</button>
    </Link>
<div>
<Link to="Alertasg">
    <button className="btn btn-lg btn-success btncustom" type="submit">Regresar</button>
    </Link>
</div>
 </form>
 </div>
 </div>
</>
/*<div>
<Link to="AggEstudiante"><a class="h5" href="Seguimiento">Agregar estudiante</a></Link>
</div>*/
          ); 
        }
    }


 
export default Login;