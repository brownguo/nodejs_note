const http = require('http')
const url = require('url')
http.createServer((request, response)=>{
    let req_url = request.url
    response.writeHead(200, {
        "Content-Type":"text/html;charset=utf-8"
    });
    response.end(renderHTML(req_url))
}).listen(5000,()=>{
    console.log("server start")
})

function renderHTML(url) {
    if(url === "/favicon.ico"){
        return ;
    }
    switch (url){
        case "/home":
            return `Home1`
        case "/user":
            return `User`
        default:
            return `
               not found!
          `
    }
}