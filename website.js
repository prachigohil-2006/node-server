const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    console.log(req.url);
     
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.statusCode = 200;
        res.end(`<h1>hello everyone!</h1><p>hey this is the way to rock the world!</p>`);
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end(`<h1>This is an about page</h1><p>hey this is about nodeJS</p>`);
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end(`<h1>not found!</h1><p>hey!this page is notk found</p>`);
    }
})
server.listen(port, () => {
    console.log(`the server is listening on the port ${port}`);
});
