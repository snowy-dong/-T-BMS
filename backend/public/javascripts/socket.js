
exports.scoket = function (server) {
  const _io = require('socket.io')(server)
  _io.set('transports', ['websocket', 'polling', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
  _io.set('origins', '*:*');
  _io.on('connection', function (socket) {
    
    socket.emit('news', { data: 'world' });	// 给该客户端发送事件
    
    // 建立该socket上的事件处理函数（对不同事件，进行不同的处理）
    socket.on('message', function (data) {
        console.log("my other event:" + data);
    });
    
  })
};