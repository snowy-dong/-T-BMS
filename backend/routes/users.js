var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/mysql.js');  

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  count();
  function count(){
    let sqlonlycount = `select count(1) from  user where user_name = "`+ req.body.name +`";`;
    db.query(sqlonlycount, function(err, results, fields){  
      if (err) throw err;
      console.log(results[0]['count(1)'])
      if(results[0]['count(1)'] > 0){
         res.send({
           code: 'U001',
           msg:"user_name  已存在"
         });
      }else{
        return insert();
      }
    });  
  }
  function insert (){
  let sql = `insert into user values(0,"${req.body.name}",123456,"${req.body.email}","${req.body.cellphone}","${req.body.joinDate}",Null ,"${req.body.gender}");`;  
  console.log(sql)
    db.query(sql, function(err, results, fields){  
      if (err) throw err;
      console.log('results')
      console.log(results)
      insertRole_Permiss(results.insertId)
      // res.send({
      //   code: 'S200',
      //   msg:""
      // });
    });
  }
  function insertRole_Permiss(results){
    console.log(req.body.role)
    let sql = `insert into user_role (user_id, role_id) values `;  
    req.body.role.forEach(element => {
      sql+= `(${results}, ${element}),`;  
    
    });
    sql = sql.substr(0, sql.length - 1) + ';';
    console.log(sql)
    db.query(sql, function(err, results, fields){  
      if (err) throw err;
      console.log(results)
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
    sql= `select id,user_name,email,cell_phone,join_date,leave_date,gender from user where user_name like "%` + req.query.keyword + `%"  limit `+(req.query.pageNo-1)*req.query.pageSize +`,`+req.query.pageSize+`;`; 
    sqlCount = `select count(1)  from user where user_name like "%` + req.query.keyword + `%";`;  
  
  }else{
    sql= `select id,user_name,email,cell_phone,join_date,leave_date,gender  from user   limit `+(req.query.pageNo-1)*req.query.pageSize +`,`+req.query.pageSize+`;`;  
    sqlCount = `select count(1) from user;` 
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
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  var sql= `select id,user_name,email,cell_phone,join_date,leave_date,gender from user WHERE id=`+req.params.id;  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    res.send({
        code: 'S200',
        data:results
      });
  });
});
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id)
  var sql= `DELETE FROM user WHERE id=`+req.params.id;  
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
  var sql= `UPDATE user SET user_name="` + req.body.params.user_name + `" WHERE id=` + req.params.id;  
  db.query(sql, function(err, results, fields){  
    if (err) throw err;
    res.send({
        code: 'S200',
        msg:""
      });
  });
});
module.exports = router;
