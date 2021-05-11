import mongoose from 'mongoose';

const Model__Article = new mongoose.Schema({
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  keyWords: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'KeyWord',
  },
  header_H1: { type: String },
  header_H2: { type: String },
  header_H3: { type: String },
  header_H4: { type: String },
  imageUrl: {
    type: String,
  },
  imageAlt: {
    type: String,
  },

  dateUpdated: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let Export__Article;

if (mongoose.models.Article) {
  Export__Article = mongoose.model('Article');
} else {
  Export__Article = mongoose.model('Article', Model__Article);
}

export default Export__Article;
