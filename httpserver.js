const http = require('http')

const port = process.env.port || 3000

const server = http.createServer((req, res)=>{
    // console.log(req);
    res.setHeader('Content-type','text/html')
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>I\'m Sahil</h1><p>You have visited this page</p>')
    } else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About Sahil</h1><p>This is the about section</p>')
    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>This resource is not found on the server</p>')
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);    
})

