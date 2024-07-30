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
  phone: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    default: ''
  },
  FieldofInterest: {
    type: String,
    default: ''
  },
  profilePhoto: {
    type: String, // Store Base64 string
    default: ''
  }
});

module.exports = mongoose.model('User', UserSchema);
