import {Link} from 'react-router-dom'; 
import Coor from '../imagenes/Coor.jpg';

import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import '../styles/styles.css';
const url="http://localhost:3000/usuarios";


class App extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    nombre_grupo: '',
    grupo: '',
    asignatura: ''
  }
}

  
peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
  delete this.state.form.id;
  await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}
peticionGet=()=>{
  axios.get(url).then(response=>{
    this.setState({data: response.data});
  }).catch(error=>{
    console.log(error.message);
  })
  }


seleccionarGrupo=(usuarios)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: usuarios.id,
      nombre: usuarios.nombre,
      apellido: usuarios.apellido
    }
  })
}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
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
  
<div><table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(usuarios=>{
          return(
            <tr>
          <td>{usuarios.id}</td>
          <td>{usuarios.nombre}</td>
          <td>{usuarios.apellido}</td>
          <td><Link to="AsisCoor">
    <button className="btn btn-success" type="submit">Ver mas</button>
    </Link></td>
          </tr>

          
          )
        })}
      </tbody>
      
    </table>
 </div>

</form>
</div>
</div>

</>

          ); 
        }
    }


 
export default App;