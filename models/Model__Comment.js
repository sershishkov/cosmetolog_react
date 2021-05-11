const mongoose = require('mongoose');

const Model__Comment = new mongoose.Schema({
  commentText: {
    type: String,
  },
  commentAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  },
});

module.exports = mongoose.model('Comment', Model__Comment);
