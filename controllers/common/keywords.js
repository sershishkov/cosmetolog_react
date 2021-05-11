const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__KeyWord = require('../../models/Model__KeyWord');

//@desc   Add a __KeyWord
//@route  POST /api/keywords
//@access Private
exports.add__KeyWord = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const { keyWord_text } = req.body;
  if (!keyWord_text || keyWord_text.trim() === '') {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    const new__KeyWord = new Model__KeyWord({
      keyWord_text,
    });

    await new__KeyWord.save();

    res.status(201).json({
      success: true,
      data: new__KeyWord,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update a __KeyWord
//@route  PUT /api/keywords/:id
//@access Private
exports.update__KeyWord = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const { keyWord_text } = req.body;
  const { id } = req.params;
  if (!keyWord_text || keyWord_text.trim() === '' || !id) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  const new__KeyWord = {
    keyWord_text,
  };

  try {
    const updated__KeyWord = await Model__KeyWord.findByIdAndUpdate(
      id,
      new__KeyWord,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updated__KeyWord,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __KeyWord
//@route  GET /api/keywords
//@access Private
exports.getAll__KeyWord = asyncHandler(async (req, res, next) => {
  try {
    const all__KeyWords = await Model__KeyWord.find().sort({
      keyWord_text: 1,
    });

    if (!all__KeyWords) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__KeyWords,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __KeyWord
//@route  GET /api/keywords/:id
//@access Private
exports.getOne__KeyWord = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__KeyWord = await Model__KeyWord.findById(id);
    if (!one__KeyWord) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__KeyWord,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __KeyWord
//@route  DELETE /api/keywords/:id
//@access Private
exports.delete__KeyWord = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__KeyWord = await Model__KeyWord.findByIdAndDelete(id);
    if (!one__KeyWord) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});
