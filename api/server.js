const http = require("http");
const fs = require("fs");
const path = require("path");



const server = http.createServer((req, res)=>{
    let filePath = req.url === "/"
    ?"./public/index.html"
    :"./public" + req.url;

    let ext = path.extname(filePath);

    let contentType = "text/html";

    switch(ext){
        case ".css": contentType = "text/css";break;
        case ".js": contentType = "text/javascript";break;
        case ".png": contentType = "image/png";break;
        case ".jpg": contentType = "image/jpg";break;
        case ".ico": contentType = "image/x-icon";break;
    }

    fs.readFile(filePath, (err,data) => {
        if(err){
            res.writeHead(404, {"Content-Type":"text/plain"});
            res.end("404  -  File Not Found ");
        }else{
            res.writeHead(200, {"content-Type":contentType});
            res.end(data);
        }
    });
});


server.listen(8000, () => {
    console.log("Server running at http://localhost:800");
});