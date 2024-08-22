const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  rollno: Number,
  age: Number,
});
module.exports = mongoose.model("student", UserSchema);
