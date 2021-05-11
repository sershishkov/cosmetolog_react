const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Faq = require('../../models/Model__Faq');

//@desc   Add a __Faq
//@route  POST /api/faqs
//@access Private
exports.add__Faq = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
    questionText,
    answerText,
  } = req.body;
  if (
    !metaTitle ||
    !metaDescription ||
    !keyWords ||
    !questionText ||
    !answerText ||
    metaTitle.trim() === '' ||
    metaDescription.trim() === '' ||
    keyWords.length === 0 ||
    questionText.trim() === '' ||
    answerText.trim() === ''
  ) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    const new__Faq = new Model__Faq({
      metaTitle,
      metaDescription,
      keyWords,
      questionText,
      answerText,
    });

    await new__Faq.save();

    res.status(201).json({
      success: true,
      data: new__Faq,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update a __Faq
//@route  PUT /api/faqs/:id
//@access Private
exports.update__Faq = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
    questionText,
    answerText,
  } = req.body;
  const { id } = req.params;
  if (
    !metaTitle ||
    !metaDescription ||
    !keyWords ||
    !questionText ||
    !answerText ||
    metaTitle.trim() === '' ||
    metaDescription.trim() === '' ||
    keyWords.length === 0 ||
    questionText.trim() === '' ||
    answerText.trim() === '' ||
    !id
  ) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  const new__Faq = {
    metaTitle,
    metaDescription,
    keyWords,
    questionText,
    answerText,
  };

  try {
    const updated__Faq = await Model__Faq.findByIdAndUpdate(id, new__Faq, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: updated__Faq,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Faq
//@route  GET /api/faqs
//@access Private
exports.getAll__Faq = asyncHandler(async (req, res, next) => {
  try {
    const all__Faqs = await Model__Faq.find()
      .populate({
        path: 'keyWords',
        select: 'keyWord_text',
        // model: Model__KeyWord,
      })

      .sort({
        questionText: 1,
      });
    // .exec();

    if (!all__Faqs) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Faqs,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Faq
//@route  GET /api/faqs/:id
//@access Private
exports.getOne__Faq = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Faq = await Model__Faq.findById(id).populate({
      path: 'keyWords',
      select: 'keyWord_text',
      // model: Model__KeyWord,
    });
    if (!one__Faq) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Faq,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Faq
//@route  DELETE /api/faqs/:id
//@access Private
exports.delete__Faq = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Faq = await Model__Faq.findByIdAndDelete(id);
    if (!one__Faq) {
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
