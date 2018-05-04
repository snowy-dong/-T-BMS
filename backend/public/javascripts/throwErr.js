function throwErr(next, err, code, msg){
   if (err) {
    var err = new Error(msg);
    err.status = 200;
    err.code="S400"
    next(err);
  };
}
module.exports = throwErr