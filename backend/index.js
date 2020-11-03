const express =require('express');  //declaracion
 const app = express(); // constructor de la clase express
 const routes = require('./routes/routes');
  //se define las otras rutas
 // por módulos ( routaProductos, e...)
const estudiantes=require('./routes/estudiantes');
const grupos=require('./routes/grupos');
const usuarios=require('./routes/usuarios');
const faltas=require('./routes/faltas');

app.set('port',3000)//

  //middleware
  app.use(express.json());

  // ajustes
  app.use('/api',routes); // peticiones directas, acciones, callback
  app.use('/api/grupos',grupos);
  app.use('/api/estudiantes',estudiantes);
  app.use('/api/usuarios',usuarios);
  app.use('/api/faltas',faltas);
  app.listen(app.get('port'),()=>{
  console.log('Servidor corriendo en puerto '+app.get('port'))

  
  });