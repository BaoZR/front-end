const express = require('express')
const app = express()
const port = 9999
// 接口地址为 http://localhost:9999/getData 
app.get('/getData', (req, res) => {
    let tmpData = {
        code: 200,
        msg: '成功',
        data: '这是后台返回的数据！'
    }
  res.send(tmpData)
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

