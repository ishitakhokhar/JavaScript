const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productno: Number,
  name: String,
  price: Number,
  weight: Number,
});
module.exports = mongoose.model("product", productSchema);
