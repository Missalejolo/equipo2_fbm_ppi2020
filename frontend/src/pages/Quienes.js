

import React, { Component } from 'react';
import '../styles/styles.css'; 
import Jose from "../imagenes/Jose.jpg";
import JoseA from "../imagenes/JoseA.jpg";
import Juana from "../imagenes/Juana.jpg";
import Kevin from "../imagenes/Kevin.jpg";
class Login extends Component {
    
    render() {
        return (
          <>
            <h1 className="h3 mb-5 font-weight-normal text-center ">Equipo de S.A.P.Felix</h1>
  
            <h2>Jose Alejandro López Rojas:<h3>Programador,lider y diseñador.</h3></h2>
    <div className="integrantes"><img className ="img"src= {Jose}width="300" height="300"align="center"/></div>
            <h2>Juana Velazquez Tobón:<h3>Programadora y diseñadora.</h3></h2>  
    <div className="integrantes"><img className ="img"src= {Juana}width="300" height="300"align="center"/></div>
            <h2>Jose Alejandro Gonzalez Villa:<h3>Programador y diseñador.</h3></h2>
    <div className="integrantes"><img className ="img"src= {JoseA}width="300" height="300"align="center"/></div>
            <h2>Kevin Alexander Guzman Botero:<h3>Programador y diseñador.</h3></h2>
    <div className="integrantes"><img className ="img"src={Kevin}width="300" height="280"align="center"/></div>
         
  
</>

          ); 
        }
    }


 
export default Login;
