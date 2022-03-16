const express = require('express');
const router = express.Router();
const request = require('request');


const hostname = 'localhost';
const port = 3000;

const app = express();

// 指定模板存放目录
app.set('views', 'views');

// 指定模板引擎为 Handlebars
// 没模板引擎不就变成源码了吗。。
app.set('view engine', 'hbs');

app.get('/',(req,res) =>{
    res.render('index')
})


// 转发get
app.get('/api/getData', (req, res) => {
    let url = 'http://127.0.0.1:9999/getData'; 
    request(url, function(error,response,body){
        if(response.statusCode === 200){
            var data = JSON.parse(body);
            res.send(data);
        }else{
            res.send('{error:404}');
        }
    });
});


app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

