import React, { Component } from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom'; 
import logo from '../imagenes/logo.png'

class Login extends Component {
    
    render() {
        return (
          
          <>
<div className="Titulos">
 <h1>Don señor</h1>
</div>
  
<div>
 <h2 className="h2alertas">11*1</h2>
 <p className="p-alertas">Artistica</p>
</div>

<div>
 <h2 className="h2alertas">11*2</h2>
 <p className="p-alertas">Religion</p>
 <p className="p-alertas">Matematicas</p>
</div>

<div className="ver">
 <p>Ver más</p>
 <p>Ver más</p>
 <p>Ver más</p>
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