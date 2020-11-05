import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 

import Docente from '../imagenes/docente.png'
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
      
      <a class="nav-item nav-link active" href="">Inicio<span class="sr-only">(current)</span></a>
      <Link to="Alertasg"><a class="nav-item nav-link" href="Alertasg">Grupos</a></Link>
    </div>
  </div>
  
</nav>
    
    </header>
    
    <div className="container">
   <div className="row justify-content-center align-items-center minh-100">
    <form className="form-signin text-center align-items-center col-10">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Docente</h1>
    <img src={Docente}width="200px" height="200px"align="center"/><br></br>
    <h2>Grupos</h2>
 <h4 className="bloque">11°1:</h4> 
 <p className="bloque">Artistica</p>    
    </form>
  </div>
  <Link className="acerca" to="Iniciosesion">
    <button className="" type="submit">X</button>
    </Link>
  </div>
</>

          ); 
        }
    }


 
export default Login;