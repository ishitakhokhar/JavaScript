const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const student = require("./model/student");

mongoose.connect("mongodb://localhost:27017/student").then(() => {
  console.log("Connection to data base");
  const app = express();
  app.use(bodyParser.urlencoded());
  app.use(express.json());

  //getAll
  app.get("/student", async (req, res) => {
    const ans = await student.find();
    res.send(ans);
  });

  //getById
  app.get("/student/:id", async (req, res) => {
    const ans = await student.findOne({ rollno: req.params.id });
    res.send(ans);
  });

  //create
  app.post("/student", async (req, res) => {
    // console.log(req.body);
    stu = new student({ ...req.body });
    const ans = await stu.save();
    res.send(ans);
  });

  //delete
  app.delete("/student/:id", async (req, res) => {
    const ans = await student.deleteOne({ rollno: req.params.id });
    res.send(ans);
  });

  //update
  app.patch("/student/:id", async (req, res) => {
    const stu = await student.findOne({ rollno: req.params.id });
    stu.name = req.params.name;
    const ans = await stu.save();
    res.send(ans);
  });

  app.listen(3000, () => {
    console.log("Server started");
  });
});
