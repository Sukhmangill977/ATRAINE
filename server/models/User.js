// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  EducationLevel: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: null
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('User', UserSchema);

