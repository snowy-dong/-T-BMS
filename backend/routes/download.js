var express = require('express');
var router = express.Router();
var path=require('path');  
var fs = require('fs');
var db = require('../public/javascripts/mysql');  
/* GET home page. */

router.get('/', function(req, res, next) {

  res.send({
    code: 'S200',
    msg: 'reply'
  });
});

module.exports = router;

