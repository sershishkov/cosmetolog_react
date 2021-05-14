const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Comment = require('../../models/Model__Comment');

//@desc   Add a __Comment
//@route  POST /api/admin/comments
//@access Private
exports.add__Comment = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const { commentText, commentAuthor, review } = req.body;
  if (!commentText || commentText.trim() === '' || !commentAuthor || !review) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    const new__Comment = new Model__Comment({
      commentText,
      commentAuthor,
      review,
    });

    await new__Comment.save();

    res.status(201).json({
      success: true,
      data: new__Comment,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update a __Comment
//@route  PUT /api/admin/comments/:id
//@access Private
exports.update__Comment = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const { commentText, commentAuthor, review } = req.body;
  const { id } = req.params;
  if (
    !commentText ||
    commentText.trim() === '' ||
    !commentAuthor ||
    !review ||
    !id
  ) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  const new__Comment = {
    commentText,
    commentAuthor,
    review,
  };

  try {
    const updated__Comment = await Model__Comment.findByIdAndUpdate(
      id,
      new__Comment,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updated__Comment,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Comment
//@route  GET /api/admin/comments
//@access Private
exports.getAll__Comment = asyncHandler(async (req, res, next) => {
  try {
    const all__Comments = await Model__Comment.find()
      .populate({ path: 'User', select: 'name' })
      .populate({ path: 'Review', select: 'reviewText' })
      .sort({
        createdAt: 1,
      });

    if (!all__Comments) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Comments,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Comment
//@route  GET /api/admin/comments/:id
//@access Private
exports.getOne__Comment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Comment = await Model__Comment.findById(id)
      .populate({ path: 'User', select: 'name' })
      .populate({ path: 'Review', select: 'reviewText' });
    if (!one__Comment) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Comment,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Comment
//@route  DELETE /api/admin/comments/:id
//@access Private
exports.delete__Comment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Comment = await Model__Comment.findByIdAndDelete(id);
    if (!one__Comment) {
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
