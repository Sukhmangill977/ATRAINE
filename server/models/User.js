// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // bio: { type: String },
  // age: { type: Number },
  // address: { type: String },
  phone: { type: String },
  gender: { type: String },
  FieldofInterest: { type: String },
  profilePhoto: { type: String } // Field to store Base64 string
});

const User = mongoose.model('User', userSchema);

module.exports = User;
