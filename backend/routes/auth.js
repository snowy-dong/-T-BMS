var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/mysql.js');  

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send(req.body);
});
module.exports = router;