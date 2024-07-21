const http = require("http");

const server = http.createServer((req, res) => {
  // res.statusCode = 300;
  // res.setHeader("Content-type", "text/html");
  res.end("Hello World");
});
server.listen(3000, () => {
  console.log("server running at http://127.0.0.1:3000/");
});
  