var events = require('events');
var eventEmitter = new events.EventEmitter();

var listen1 = function listen1(){
    console.log('监听器1执行')
}

var listen2 = function listen2(){
    console.log('监听器2执行')
}
// 添加监听
eventEmitter.addListener('connection',listen1);
eventEmitter.on('connection',listen2);
//统计监听
var eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听连接事件')


eventEmitter.emit('connection')

//移除监听
eventEmitter.removeListener('connection',listen1)
console.log('listen1不再受监听')

eventEmitter.emit('connection')


eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners +"个监听器监听连接事件");

console.log("程序执行完毕");

