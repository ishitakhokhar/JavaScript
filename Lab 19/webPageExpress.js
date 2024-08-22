const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  console.log(req.url);
  if (req.url == "/about") {
    console.log(req.url);
    fs.readFile("about.html", (err, data) => {
      res.send(data.toString());
    });
  } else if (req.url == "/main") {
    fs.readFile("main.html", (err, data) => {
      res.send(data.toString());
    });
  } else if (req.url == "/contact") {
    fs.readFile("contact.html", (err, data) => {
      res.send(data.toString());
    });
  } else if (req.url == "/home") {
    fs.readFile("home.html", (err, data) => {
      res.send(data.toString());
    });
  } else if (req.url == "/first") {
    fs.readFile("first.html", (err, data) => {
      res.send(data.toString());
    });
  }
});
app.listen(3000, function () {
  console.log("server running at http://127.0.0.1:3000/");
});
