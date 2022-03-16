//管道流
let fs = require("fs")

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

//搭建管道并运行
readStream.pipe(writeStream);

console.log("程序执行完成")

