/*const mysql=require('mysql');
const { userInfo } = require('os');
const mysqlConnection=mysql.createConnection({
host:'bphv0g5tgcu32gucslmf-mysql.services.clever-cloud.com',
user:'uwkyag5r7rpi1e4e',
password:'bphv0g5tgcu32gucslmf',
database:'bphv0g5tgcu32gucslmf',
multipleStamentes:true //permite establecer espacios para varios clientes
}
); //fin conexion
mysqlConnection.connect(function(err){
if(err){
     console.error(error);
    return;
}else{}
    console.log('Base de datos conectada')


})
*/
const mysql=require('mysql');
const { userInfo } = require('os');
const mysqlConnection=mysql.createConnection({
host:'bphv0g5tgcu32gucslmf-mysql.services.clever-cloud.com',
user:'uwkyag5r7rpi1e4e',
password:'5V92cin0v4uUWaufaGhj',
database:'bphv0g5tgcu32gucslmf',
multipleStamentes:true //permite establecer espacios para varios clientes
}
); //fin conexion
mysqlConnection.connect(function(err){
if(err){
     console.error(err);
    return;
}else{}
    console.log('Base de datos conectada')


})


module.exports = mysqlConnection;