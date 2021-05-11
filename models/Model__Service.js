import mongoose from 'mongoose';

const Model__Service = new mongoose.Schema({
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

  proceduresHeader_H3: { type: String },
  procedures: { type: [mongoose.Schema.Types.ObjectId], ref: 'Procedure' },
  serviceHeader_H2: { type: String },
  serviceDescription: { type: String },
  serviceAdvantageHeader_H2: { type: String },
  serviceAdvantageDescription: { type: String },
  servicePreparationHeader_H2: { type: String },
  servicePreparationDescription: { type: String },
  recoveryAfterServiceHeader_H2: { type: String },
  recoveryAfterServiceDescription: { type: String },
  drugUsedHeader_H2: { type: String },
  drugUsedDescription: { type: String },
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

let Export__Service;

if (mongoose.models.Service) {
  Export__Service = mongoose.model('Service');
} else {
  Export__Service = mongoose.model('Service', Model__Service);
}

export default Export__Service;
