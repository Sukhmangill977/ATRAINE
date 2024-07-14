const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true,
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;
