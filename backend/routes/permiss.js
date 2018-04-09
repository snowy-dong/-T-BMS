var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/mysql.js');  

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  count();
  function count(){
    let sqlonlycount = `select count(1) from  permiss where permiss_code = "`+ req.body.permiss_name +`" or permiss_name = "`+req.body.permiss_code+`";`;
    db.query(sqlonlycount, function(err, results, fields){  
      if (err) throw err;
      console.log(results[0]['count(1)'])
      if(results[0]['count(1)'] > 0){
         res.send({
           code: 'P001',
           msg:"permiss_code or permiss_name  已存在"
         });
      }else{
        return insert();
      }
    });  
  }
  function insert (){
  let sql = `insert into permiss values(0,"`+ req.body.permiss_name +`" ,"`+req.body.permiss_code+`");`;  
    db.query(sql, function(err, results, fields){  
      if (err) throw err;
      res.send({
        code: 'S200',
        msg:""
      });
    });
  }
});
router.get('/list', function(req, res, next) {
  var sql='';
  var sqlCount='';
  if(req.query.keyword){
    console.log(11111)
    sql= `select *  from permiss where permiss_code like "%` + req.query.keyword + `%" or permiss_name like "%`+req.query.keyword+`%"  limit `+(req.query.pageNo-1)*req.query.pageSize +`,`+req.query.pageSize+`;`; 
    sqlCount = `select count(1)  from permiss where permiss_code like "%` + req.query.keyword + `%" or permiss_name like "%`+req.query.keyword+`%";`;  
  
  }else{
    sql= `select *  from permiss   limit `+(req.query.pageNo-1)*req.query.pageSize +`,`+req.query.pageSize+`;`;  
    sqlCount = `select count(1) from permiss;` 
  }
  let data ={
    count:0,
    list:[]
  }
  count();
  function count(){
    db.query(sqlCount, function(err, results, fields){  
      if (err) throw err;
      data.count = results[0]['count(1)']
      page();
    });
  }
  function page(){
    db.query(sql, function(err, results, fields){  
      if (err) throw err;
      data.list = results
      res.send(data);
    });
  }
});
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id)
  var sql= `DELETE FROM permiss WHERE id=`+req.params.id;  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    res.send({
        code: 'S200',
        msg:""
      });
  });
});
router.put('/:id', function(req, res, next) {
  console.log(req.params.id)
  console.log(req)
  var sql= `UPDATE permiss SET permiss_code="`+req.body.params.permiss_code + `", permiss_name="` + req.body.params.permiss_name + `" WHERE id=` + req.params.id;  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    res.send({
        code: 'S200',
        msg:""
      });
  });
});
module.exports = router;
