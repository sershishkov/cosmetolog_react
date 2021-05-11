import mongoose from 'mongoose';

const Model__Review = new mongoose.Schema({
  reviewText: {
    type: String,
  },
  reviewAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

let Export__Review;

if (mongoose.models.Review) {
  Export__Review = mongoose.model('Review');
} else {
  Export__Review = mongoose.model('Review', Model__Review);
}

export default Export__Review;
