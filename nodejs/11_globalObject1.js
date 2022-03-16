console.log("脚本路径：",__filename)
console.log("所在目录：",__dirname)

//定时器
function printHello(){
    console.log("Hello");
}

setTimeout(printHello,2000);

//clearTimeout(t)
//setInterval(cb, ms)
//console

//process

process.on('exit',function(code){
    console.log('退出码:',code)
});

console.log('程序运行结束');




