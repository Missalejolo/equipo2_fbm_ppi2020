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
  


module.exports =router;