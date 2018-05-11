var express = require('express');
var router = express.Router();
var path=require('path');  
var fs = require('fs');
var db = require('../public/javascripts/mysql');  
/* GET home page. */

router.get('/', function(req, res, next) {
  var Filepath= path.join(__dirname, '../uploads')
  var fileName = "CSS参考手册.chm"
  fs.readFile(Filepath + '/' + fileName,  function (err, data) {
    if (err) {
      console.log(err)
    }
    res.writeHead(200,{
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename='+ encodeURIComponent(fileName)
    });
    res.end(data);
  });

});

module.exports = router;

