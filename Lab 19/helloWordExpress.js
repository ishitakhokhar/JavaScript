const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});
app.listen(3000, function () {
  console.log("server running at http://127.0.0.1:3000/");
});
