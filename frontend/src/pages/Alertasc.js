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
  
 <a class="navbar-brand" href="#">Coordinador</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
   <div class="navbar-nav">
     
   <Link to="MenuC"><a class="nav-item nav-link" href="MenuC">Inicio</a></Link>
     <a class="nav-item nav-link active" href="">Docentes<span class="sr-only">(current)</span></a>
   </div>
 </div>
 
</nav>
   
   </header>

   <div className="container">
   <div className="row justify-content-center align-items-center minh-100">
<form className="form-signin text-center align-items-center col-10">
  
<div>
 <h2>11°1</h2>
 <p className="bloque">Docente</p> 
 <Link to="AsisCoor"><a className="h4 bloque" href="AsisCoor">Ver mas</a></Link> 
 </div>

</form>
</div>
</div>

</>

          ); 
        }
    }


 
export default Login;