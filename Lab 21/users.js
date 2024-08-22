const express = require("express");
const app = express();
const bodyParser = express("body-parser");
const { mongoose } = require("mongoose");
const UserModel = require("./model/user");

// mongoose
//   .connect("mongodb+srv://admin:ADMIN@cluster0.7quw8.mongodb.net/")
//   .then(console.log("Database connected"));

mongoose.connect("mongodb://localhost:27017/user").then(() => {
  console.log("Database connected");
  const app = express();
});

app.listen(3000, () => {
  console.log("Server started");
});
