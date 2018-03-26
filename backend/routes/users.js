var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/mysql.js');  
/* GET users listing. */
router.post('/', function(req, res, next) {
  var sql = 'SELECT 1 + 1 AS solution';  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    let obj={
      name:'The solution is: '+ results[0].solution
    }
    res.send(obj);
  });  
});

module.exports = router;
