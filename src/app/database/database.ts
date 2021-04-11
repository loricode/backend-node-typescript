const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'estudiantedb'
});

module.exports = conexion;