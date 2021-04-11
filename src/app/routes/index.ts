const Router = require('express');
const router = Router();
const db = require('../database/database');

router.get('/', function(req, res){ 
  res.json({"nombre":'loricode'});
});

router.get('/estudiantes', function(req, res){
    const query = "SELECT * FROM estudiante";  
    db.query(query, function(error, results, fields){
      res.json(results);
    });
});

router.get('/estudiantes', function(req, res){
  const obj = req.body
  const query = "INSERT INTO estudiante SET ?";  
  db.query(query, obj, function(error, results, fields){
     res.json(results.insertId)
  })
});

module.exports =  router;