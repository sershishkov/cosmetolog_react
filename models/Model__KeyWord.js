const mongoose = require('mongoose');

const Model__KeyWord = new mongoose.Schema({
  keyWord_text: {
    type: String,
  },
});

module.exports = mongoose.model('KeyWord', Model__KeyWord);

// let Export__KeyWord;

// if (mongoose.models.KeyWord) {
//   Export__KeyWord = mongoose.model('KeyWord');
// } else {
//   Export__KeyWord = mongoose.model('KeyWord', Model__KeyWord);
// }

// export default Export__KeyWord;
