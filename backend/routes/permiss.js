var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/mysql.js');  
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(1111)
  console.log(req.body)
  var sql = `insert into permiss values(0,"`+ req.body.name +`" ,"`+req.body.code+`");`;  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    // console.log('The solution is: ', results[0].solution);
    res.send(results);
  });  
});
router.get('/list', function(req, res, next) {
  var sql = `select * from permiss;`;  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    // console.log('The solution is: ', results[0].solution);
    res.send(results);
  });  
});
module.exports = router;
