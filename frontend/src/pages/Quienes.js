import React, { Component } from 'react';
import '../styles/styles.css'; 
import Jose from "../imagenes/Jose.jpg";
import JoseA from "../imagenes/JoseA.jpg";
import Juana from "../imagenes/Juana.jpg";
import Jose from "../imagenes/Jose.jpg";
class Login extends Component {
    
    render() {
        return (
          <>
            <h1 className="h3 mb-5 font-weight-normal text-center ">Equipo de S.A.P.Felix</h1>
  <div className="quienes">
    
    <p className="integrantes">Jose Alejandro López Rojas <img className ="w"src= {Jose}/></p>
        <h1>Programador,lider y diseñador</h1>
    <p className="integrantes">Juana Velazquez Tobón <img className ="w"src= {Juana}/></p>
        <h1>Programadora y diseñadora</h1>      
    <p className="integrantes">Jose Alejandro Gonzalez Villa <img className ="w"src= {JoseA}/></p>
          <h1>Programador,diseñador</h1>
    <p className="integrantes">Kevin Alexander Guzman Botero</p>
  </div>
</>

          ); 
        }
    }


 
export default Login;


