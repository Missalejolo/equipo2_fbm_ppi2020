
import {Link} from 'react-router-dom'; 
import Docente from '../imagenes/docente.png';

import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import '../styles/styles.css';
const url="http://localhost:3000/estudiantes";


class App extends Component {
  state={
    data:[],
    modalInsertar: false,
    modalEliminar: false,
    form:{
      id: '',
      nombre: '',
      apellido: '',
      grupo: ''
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
modalAsis=()=>{
    this.setState({modalAsis: !this.state.modalAsis});
  }
  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
    }
  
  
  seleccionarGrupo=(estudiantes)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: estudiantes.id,
        nombre: estudiantes.nombre,
        apellido: estudiantes.apellido,
        grupo: estudiantes.grupo
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
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Grupo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(estudiantes=>{
          return(
            <tr>
          <td>{estudiantes.id}</td>
          <td>{estudiantes.nombre}</td>
          <td>{estudiantes.apellido}</td>
          <td>{estudiantes.grupo}</td>
          <td><button className="btn btn-success" onClick={()=>{this.seleccionarGrupo(estudiantes); this.modalAsis()}}>Ver mas</button>
                {"   "}
            
          </td>
          </tr>

          
          )
        })}
      </tbody>
      
    </table>
    <div></div>
     <Link to="Alertasg">
    <button className="btn btn-success" type="submit">Regresar</button>
    </Link><button className="btn btn-primary" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar estudiante</button>
   


    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre_grupo">Nombres</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="grupo">Apellidos</label>
                    <input className="form-control" type="text" name="apellido" id="apellido" onChange={this.handleChange} value={form?form.apellido: ''}/>
                    <br />
                    <label htmlFor="asignatura">Grupo</label>
                    <input className="form-control" type="text" name="grupo" id="grupo" onChange={this.handleChange} value={form?form.grupo:''}/>
                  </div>
                  
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Agregar
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
          <Modal isOpen={this.state.modalAsis}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalAsis()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre_grupo">Nombres</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" readOnly onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="grupo">Apellidos</label>
                    <input className="form-control" type="text" name="apellido" id="apellido" readOnly onChange={this.handleChange} value={form?form.apellido: ''}/>
                    <br />
                    <label htmlFor="grupo">Grupo</label>
                    <input className="form-control" type="text" name="grupo" id="grupo" readOnly onChange={this.handleChange} value={form?form.grupo: ''}/>
                  </div>
                  
                </ModalBody>

                <ModalFooter>
                <button className="btn btn-success" onClick={()=>this.modalAsis()}>
                    Asistió
                  </button><button className="btn btn-warning" onClick={()=>this.modalAsis()}>
                    Llegó tarde
                  </button>
                  <button className="btn btn-danger" onClick={()=>this.modalAsis()}>
                    No asistió
                  </button>:
  
                    <button className="btn btn-light" onClick={()=>this.modalAsis()}>Cancelar</button>
                </ModalFooter>
          </Modal>


         
</div>
</div>

</>

          ); 
        }
    }


 
export default App;
/*<button className="btn btn-success" onClick={()=>this.modalInsertar()}>
                    Asistió
                  </button><button className="btn btn-warning" onClick={()=>this.modalInsertar()}>
                    Llegó tarde
                  </button>
                  <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>
                    No asistió
                  </button>:
  
                    <button className="btn btn-light" onClick={()=>this.modalInsertar()}>Cancelar</button>*/ 