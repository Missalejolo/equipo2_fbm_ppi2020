import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png';
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
     <a class="nav-item nav-link active" href="">Grupos<span class="sr-only">(current)</span></a>
   </div>
 </div>
 
</nav>
   
   </header>
  <div className="container">
   <div className="row justify-content-center align-items-center minh-100">
    <form className="form-signin text-center align-items-center col-10">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Agregar estudiantes</h1>
    <label for="inputEmail" className="sr-only mb-3">Nombres</label>
    <input type="text" id="inputEmail" className="form-control mb-3" placeholder="Nombres" required="" autofocus=""/>
    <label for="inputEmail" className="sr-only mb-3">Apellidos</label>
    <input type="text" id="inputEmail" className="form-control mb-3" placeholder="Apellidos " required="" autofocus=""/>
    
    <div></div>
    <Link to="CompletadoD">
    <button className="btn btn-lg btn-success btncustom" type="submit">Siguiente</button>
    </Link>
    <div></div>
    <Link to="AsisDoc">
    <button className="btn btn-lg btn-success btncustom" type="submit">Regresar</button>
    </Link>
    
    
    </form>
  </div>
  </div>
</>

          ); 
        }
    }


 
export default Login;