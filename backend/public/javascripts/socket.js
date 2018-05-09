exports.getScoket = function (server) {
  const _io = require('socket.io')(server)
  _io.set('transports', ['websocket', 'polling', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
  _io.set('origins', '*:*');

  // //只发给当前客户端
  // socket.emit("msg", "socket:" + socket.id);
  // //发送给所有连接的客户端
  // _io.emit("msg", "io:" + socket.id);

  _io.on('connection', function (socket) {
    _io.emit('msg', { msg: 'Welcome bro!' });
    socket.on('msg',function(msg){
    	_io.emit('msg', { msg: "you sent : "+msg });
    })
  })
};
