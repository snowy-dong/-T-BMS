var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/mysql.js');  
var rd = require('../public/javascripts/redis.js');  

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  get();
  function get(){
    rd.client.hget("hash key",req.body.name,function(redisRes, reply){
      console.log(reply)
      if(reply){
        res.send({code:'200',msg:reply});
      }else{
        count()
      }
     });
  }
 function set(code){
  rd.client.hset("hash key",req.body.name,code,function(redisRes, reply){
    console.log(reply)
    if(reply){
      res.send({code:'200',msg:code});
    }
   });
 }
 function count(){
  let sqlonlycount = `select count(1) from  user where user_name = "`+ req.body.name +`" and password = "`+req.body.password+`";`;
  db.query(sqlonlycount, function(err, results, fields){  
    if (err) throw err;
    console.log(results[0]['count(1)'])
    if(results[0]['count(1)'] > 0){
      return set("1234567890")
       res.send({
         code: 'S200',
         msg:"登录成功"
       });
    }else{
      res.send({code:'S401',msg:'账号或密码错误！'});
    }
  });  
}
});

module.exports = router;
