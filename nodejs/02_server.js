var http = require('http');
http.createServer(function(request, response) {
    // 内容写在{}中
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(8888);