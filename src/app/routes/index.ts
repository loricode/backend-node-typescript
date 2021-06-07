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

router.post('/estudiantes', function(req, res){
  const obj = req.body
  const query = "INSERT INTO estudiante SET ?";  
  db.query(query, obj, function(error, results, fields){
     res.json(results.insertId)
  })
});

router.delete('/estudiantes/:id', function(req, res){
  const { id } = req.params
  const query = "DELETE FROM estudiante WHERE id = ?"; 
  db.query(query, id, function(error, results, fields){
     res.json(results)
  });
});

router.get('/estudiantes/:id', function(req, res){
  const { id } = req.params
  const query = "SELECT * FROM estudiante WHERE id = ?"; 
  db.query(query, id, function(error, results, fields){
     res.json(results[0])
  });
})

router.put('/estudiantes', function(req, res){
  const { id, nombre, edad, telefono } = req.body
  const query = "UPDATE estudiante SET nombre = ?, edad = ?,"+
                "telefono = ? WHERE id = ?"
  let arryData = [nombre, edad, telefono, id]          
  db.query(query, arryData, function(error, results, fields){
     res.json({"msg":"updated", results})
  });
})


module.exports =  router;