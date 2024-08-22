const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const product = require("./model/product");

mongoose.connect("mongodb://localhost:27017/product").then(() => {
  console.log("Connected to database");
  const app = express();
  app.use(bodyParser.urlencoded());
  app.use(express.json());

  app.get("/product", async (req, res) => {
    const ans = await product.find();
    res.send(ans);
  });

  app.get("/product/:id", async (req, res) => {
    const ans = await product.findOne({ productno: req.params.id });
    res.send(ans);
  });

  app.post("/product", async (req, res) => {
    pro = new product({ ...req.body });
    const ans = await pro.save();
    res.send(ans);
  });

  app.delete("/product/:id", async (req, res) => {
    const ans = await product.deleteOne({ productno: req.params.id });
    res.send(ans);
  });

  app.patch("/product/:id", async (req, res) => {
    const pro = await product.findOne({ productno: req.params.id });
    pro.name = req.body.name;
    pro.save();
    res.send(pro);
  });

  app.listen(3000, (req, res) => {
    console.log("Server Started at 3000");
  });
});
