
const http = require('http')

const server = http.createServer((req, res)=>{
    res.write("Hal;o")
    res.end()
}).listen(3000,()=>{
    console.log("server start")
})