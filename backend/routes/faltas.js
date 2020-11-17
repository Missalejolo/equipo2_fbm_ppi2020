const express=require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');


router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tbl_falta',(err,rows,fiels)=>{
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
    router.post('/nueva-falta',(req,res)=>{
        const {id,descripcion,id_usuario,fecha,estado,id_estudiante}=req.body;
        
        let falta =[id,descripcion,id_usuario,fecha,estado,id_estudiante];
        
        let nuevafalta =`INSERT INTO tbl_falta(id,descripcion,id_usuario,fecha,estado,id_estudiante)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevafalta,falta,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`Falta creada`})
        }
        })});
        router.post('/actualizar-falta',(req,res)=>{
            const {id,descripcion,id_usuario,fecha,estado,id_estudiante}=req.body;
            
            
            mysqlConnection.query(`UPDATE tbl_falta SET id=?,descripcion=?,id_usuario=?,fecha=?,estado=?,id_estudiante=?`,
            [id,descripcion,id_usuario,fecha,estado,id_estudiante],(err,rows,fields)=>{
            if(!err){
               
               res.json({status:`Faltas actualizadas`});
            }else{
               console.log(err);
              
            }
            })});



module.exports =router;