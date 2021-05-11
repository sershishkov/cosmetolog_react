import mongoose from 'mongoose';

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

let Export__Comment;

if (mongoose.models.Comment) {
  Export__Comment = mongoose.model('Comment');
} else {
  Export__Comment = mongoose.model('Comment', Model__Comment);
}

export default Export__Comment;
