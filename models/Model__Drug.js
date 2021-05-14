const mongoose = require('mongoose');

const Model__Drug = new mongoose.Schema({
  drugName: {
    type: String,
    required: [true, 'Please add a name of drug'],
  },
  drugDescription: {
    type: String,
    required: [true, 'Please add a description of drug'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Drug', Model__Drug);
