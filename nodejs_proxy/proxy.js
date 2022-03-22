
const http = require("http")
const server = http.createServer();

server.on('request', (req, res) => {
	var { connection, host, ...originHeaders } = req.headers;

    var options = {
        "method": req.method,
        "hostname": "www.baidu.com",
        "port": "80",
        "path": req.url,
        "headers": { originHeaders }
    }


    let p = new Promise((resolve, reject) => {
        let postbody = [];
        req.on("data", chunk => {
            postbody.push(chunk);
        })
        req.on('end',()=>{
            let postbodyBuffer = Buffer.concat(postbody);
            resolve(postbodyBuffer)
        })
    });
    // //将数据转发，并接收目标服务器返回的数据，然后转发给客户端
    p.then((postbodyBuffer) =>{

        let responsebody = []
        let request = http.request(options, (response) =>{
            response.on('data',chunk =>{
                responsebody.push(chunk)
            })
            response.on("end",()=>{
                responsebodyBuffer = Buffer.concat(responsebody)
                res.end(responsebodyBuffer);
            })

        })
        request.write(postbodyBuffer)
        request.end()
    })
});

server.listen(3000, () => {
    console.log("running")
})





