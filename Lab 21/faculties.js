const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const faculty = require("./model/faculty");

mongoose.connect("mongodb://localhost:27017/faculty").then(() => {
  console.log("connected to data base");
  const app = express();
  app.use(bodyParser.urlencoded());
  app.use(express.json());

  app.get("/faculty", async (req, res) => {
    const ans = await faculty.find();
    res.send(ans);
  });

  app.get("/faculty/:id", async (req, res) => {
    const ans = await faculty.findOne({ age: req.params.id });
    res.send(ans);
  });

  app.post("/faculty", async (req, res) => {
    fac = new faculty({ ...req.body });
    const ans = await fac.save();
    res.send(ans);
  });

  app.delete("/faculty/:id", async (req, res) => {
    const ans = await faculty.deleteOne({ age: req.params.id });
    res.send(ans);
  });

  app.patch("/faculty/:id", async (req, res) => {
    const fac = await faculty.findOne({ age: req.params.id });
    fac.name = req.body.name;
    fac.save();
    res.send(fac);
  });

  app.listen(3000, (req, res) => {
    console.log("Server started");
  });
});
