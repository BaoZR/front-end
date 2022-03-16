let fs = require("fs")
let data = 'www.qq.com'

let writeStream = fs.createWriteStream('output.txt')

//从头覆盖写的
writeStream.write(data,'utf-8');
// 标记文件末尾
writeStream.end()

writeStream.on('finish',function(){
    console.log("写入完成")
})

writeStream.on('error',function(){
    console.log(err.stack)
})

console.log('程序执行完毕')

