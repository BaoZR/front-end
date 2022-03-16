let fs = require("fs")
let data = ''

let readStream = fs.createReadStream('input.txt')

readStream.setEncoding('UTF-8');
// 处理流事件 --> data, end, and error
readStream.on('data',function(chunk){
    data += chunk;
})

readStream.on('end',function(){
    console.log(data);
})

readStream.on('error',function(){
    console.log(err.stack);
})

console.log('程序执行完毕')
