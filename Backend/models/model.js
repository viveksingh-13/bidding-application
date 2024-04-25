const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  name: String,
  createdAt: Date,
});

module.exports = mongoose.model("loginName", loginSchema);
