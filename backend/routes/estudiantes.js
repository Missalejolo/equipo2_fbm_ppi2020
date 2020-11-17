const express=require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');


router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tbl_estudiantes',(err,rows,fiels)=>{
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
    router.post('/nuevo-estudiante',(req,res)=>{
        const {id,nombre,apellido,grupo}=req.body;
        
        let alumno =[id,nombre,apellido,grupo];
        
        let nuevoAlumno =`INSERT INTO tbl_estudiantes(id,nombre,apellido,grupo)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`Alumno matriculado`})
        }
        })});
        router.post('/actualizar-estudiante',(req,res)=>{
            const {id,nombre,apellido,grupo}=req.body;
            
            
            mysqlConnection.query(`UPDATE tbl_estudiantes SET id=?,nombre=?,apellido=?,grupo=?`,
            [id,nombre,apellido,grupo],(err,rows,fields)=>{
            if(!err){
               
               res.json({status:`Estudiante Actualizado`});
            }else{
               console.log(err);
              
            }
            })});



module.exports =router;