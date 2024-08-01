const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  institution: String,
  degree: String,
  yearOfStudy: String,
  preferredProgram: String,
  startDate: Date,
  endDate: Date,
  interestAreas: String,
  skills: String,
  experience: String,
  resume: String, // Store Base64 string
  portfolio: String,
  comments: String,
  consent: Boolean,
  agreement: Boolean,
}, { timestamps: true });

const Internship = mongoose.model('Internship', internshipSchema);

module.exports = Internship;
