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

  timing_H3: { type: String },
  timing: { type: String },

  procedures: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Procedure',
    },
  ],

  serviceHeader_H2: { type: String },
  serviceDescription: { type: String },
  serviceAdvantageHeader_H2: { type: String },
  serviceAdvantageDescription: { type: String },
  servicePreparationHeader_H2: { type: String },
  servicePreparationDescription: { type: String },
  recoveryAfterServiceHeader_H2: { type: String },
  recoveryAfterServiceDescription: { type: String },
  serviceResultHeader_H2: { type: String },
  serviceResultDescription: { type: String },
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
