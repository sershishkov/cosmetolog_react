const mongoose = require('mongoose');

const Model__Service = new mongoose.Schema({
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  keyWords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'KeyWord',
    },
  ],

  procedures: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Procedure',
    },
  ],

  imageUrl: {
    type: String,
    // required: true,
  },
  imageAlt: {
    type: String,
  },
  header_H1: {
    type: String,
  },

  advantageHeader_H2: { type: String },
  advantageDescription: { type: String },
  timing_H2: { type: String },
  timingDescription: { type: String },
  preparationHeader_H2: { type: String },
  preparationDescription: { type: String },
  recoveryAfterServiceHeader_H2: { type: String },
  recoveryAfterServiceDescription: { type: String },
  resultHeader_H2: { type: String },
  resultDescription: { type: String },
  priceHeader_H2: { type: String },
  priceDescription: { type: String },

  dateUpdated: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Service', Model__Service);
