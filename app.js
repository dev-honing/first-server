const http = require("http");

http
  .createServer(function (request, response) {
    let writeHeadObject = {
      "Content-Type": "http/html",
    };
    response.writeHead(200, writeHeadObject);
    response.end("hello");
  })
  .listen(8080);
