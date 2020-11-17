const express=require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tbl_grupos',(err,rows,fiels)=>{
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
    router.post('/nuevo_grupos',(req,res)=>{
        const {id,nombre_grupo,grupo,asignatura}=req.body;
        
        let alumno =[id,nombre_grupo,grupo,asignatura];
        
        let nuevoAlumno =`INSERT INTO tbl_grupos(id,nombre_grupo,grupo,asignatura)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`Grupos creado`})
        }
        })});
        router.post('/actualizar-grupos',(req,res)=>{
            const {id,nombre_grupo,grupo,asignatura}=req.body;
            
            
            mysqlConnection.query(`UPDATE tbl_grupos SET id=?,nombre_grupo=?,grupo=?,asignatura=?`,
            [id,nombre_grupo,grupo,asignatura],(err,rows,fields)=>{
            if(!err){
               
               res.json({status:`Grupos actualizado`});
            }else{
               console.log(err);
              
            }
            })});

            
module.exports =router;