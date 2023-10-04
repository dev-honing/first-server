const http = require("http");

http
  .createServer(function (request, response) {
    let wrtieHeadObject = {
      "Content-Type": "http/html",
    };
    response.writeHead(200, writeHeadObject);
    response.end("hello");
  })
  .listen(8080);
