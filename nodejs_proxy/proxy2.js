const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    var { connection, host, ...originHeaders } = req.headers;
    var options = {
        "method": req.method,
        // 随表找了一个网站做测试，被代理网站修改这里
        "hostname": "www.baidu.com",
        "port": "80",
        "path": req.url,
        "headers": { originHeaders }
    }
    //接收客户端发送的数据
    var p = new Promise((resolve,reject)=>{
        let postbody = [];
        req.on("data", chunk => {
            postbody.push(chunk);
        })
        req.on('end', () => {
            let postbodyBuffer = Buffer.concat(postbody);
            resolve(postbodyBuffer)
        })
    });
    //将数据转发，并接收目标服务器返回的数据，然后转发给客户端
    p.then((postbodyBuffer)=>{
        let responsebody=[]
        var request = http.request(options, (response) => {
            response.on('data', (chunk) => {
                responsebody.push(chunk)
            })
            response.on("end", () => {
                responsebodyBuffer = Buffer.concat(responsebody)
                res.end(responsebodyBuffer);
            })
        })
        // 使用request的write方法传递请求体
        request.write(postbodyBuffer)
        // 使用end方法将请求发出去
        request.end();
    })
});
server.listen(3000, () => {
    console.log("runnng");
})
