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
     <a class="nav-item nav-link active" href="">Grupos<span class="sr-only">(current)</span></a>
   </div>
 </div>
 
</nav>
   
   </header>
          
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