import mongoose from 'mongoose';

const Model__Procedure = new mongoose.Schema({
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

let Export__Procedure;

if (mongoose.models.Procedure) {
  Export__Procedure = mongoose.model('Procedure');
} else {
  Export__Procedure = mongoose.model('Procedure', Model__Procedure);
}

export default Export__Procedure;
