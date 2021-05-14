const mongoose = require('mongoose');

const Model__Review = new mongoose.Schema({
  reviewText: {
    type: String,
  },
  reviewAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  serviceBelongs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Review', Model__Review);
