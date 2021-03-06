
import {Link} from 'react-router-dom'; 
import Docente from '../imagenes/docente.png';

import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import '../styles/styles.css';
const url="http://localhost:3000/grupos";


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
  
  
  seleccionarGrupo=(grupos)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: grupos.id,
        nombre_grupo: grupos.nombre_grupo,
        grupo: grupos.grupo,
        asignatura: grupos.asignatura
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
   <div className="row justify-content-center align-items-center  minh-100 col-15">
   <br /><br /><br />
  
  <br /><br />
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Grupo</th>
          <th>Asignatura</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(grupos=>{
          return(
            <tr>
          <td>{grupos.id}</td>
          <td>{grupos.nombre_grupo}</td>
          <td>{grupos.grupo}</td>
          <td>{grupos.asignatura}</td>
          </tr>

          
          )
        })}
      </tbody>
      
    </table>
    <div></div>
    
    <button className="btn btn-primary" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar grupo</button>
    
    <Link to="Estudiantes">
    <button className="btn btn-success" type="submit">Ver estudiantes</button>
    </Link>


    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre_grupo">Nombre</label>
                    <input className="form-control" type="text" name="nombre_grupo" id="nombre_grupo" onChange={this.handleChange} value={form?form.nombre_grupo: ''}/>
                    <br />
                    <label htmlFor="grupo">Grupo</label>
                    <input className="form-control" type="text" name="grupo" id="grupo" onChange={this.handleChange} value={form?form.grupo: ''}/>
                    <br />
                    <label htmlFor="asignatura">Asignatura</label>
                    <input className="form-control" type="text" name="asignatura" id="asignatura" onChange={this.handleChange} value={form?form.asignatura:''}/>
                  </div>
                  
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>:
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar el grupo {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
</div>
</div>

</>

          ); 
        }
    }


 
export default App;
/*<td>
          <button className="btn btn-success" onClick={()=>{this.seleccionarGrupo(grupos); this.modalVer()}}>Ver mas</button>
                {"   "}
                <button className="btn btn-primary" onClick={()=>{this.seleccionarGrupo(grupos); this.modalInsertar()}}>editar</button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarGrupo(grupos); this.setState({modalEliminar: true})}}>borrar</button>
                </td>*/