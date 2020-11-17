const express=require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tbl_usuarios',(err,rows,fiels)=>{
    // si no hay error
        if(!err){
    
    // Haga esto
         res.json(rows); 
    }else{
    // si no (si hay error)
    console,log(err);
    }// fin si
    })// fin query
    })// fin retorno de todos
    router.post('/nuevo-usuario',(req,res)=>{
        const {id,nombre,apellido,contraseña,correo,rol}=req.body;
        
        let alumno =[id,nombre,apellido,contraseña,correo,rol];
        
        let nuevoAlumno =`INSERT INTO tbl_usuarios(id,nombre,apellido,contraseña,correo,rol)
        VALUES(?,?,?,?,?,?)`;
        mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`usuario registrado`})
        }
        })});
        router.post('/actualizar-usuario',(req,res)=>{
            const {id,nombre,apellido,contraseña,correo,rol}=req.body;
            
            
            mysqlConnection.query(`UPDATE tbl_usuarios SET id=?,nombre=?,apellido=?,contraseña=?,correo=?,rol=?`,
            [id,nombre,apellido,contraseña,correo,rol],(err,rows,fields)=>{
            if(!err){
               
               res.json({status:`usuario actualizado`});
            }else{
               console.log(err);
              
            }
            })});
    

module.exports =router;