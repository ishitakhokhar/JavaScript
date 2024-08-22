const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  name: String,
  age: Number,
  department: String,
  email: String,
});
module.exports = mongoose.model("faculty", facultySchema);
