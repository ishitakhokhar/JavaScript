const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  if (req.url == "/about") {
    fs.readFile("about.html", (err, data) => {
      res.end(data.toString());
    });
  } else if (req.url == "/contact") {
    fs.readFile("contact.html", (err, data) => {
      res.end(data.toString());
    });
  } else if (req.url == "/Home") {
    fs.readFile("Home.html", (err, data) => {
      res.end(data.toString());
    });
  } else {
    fs.readFile("Main.html", (err, data) => {
      res.end(data.toString());
    });
  }
});
server.listen(3000, () => {
  console.log("Server started");
});
