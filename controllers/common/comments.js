const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Comment = require('../../models/Model__Comment');

//@desc   Add a __Comment
//@route  POST /api/Comments
//@access Private
exports.add__Comment = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body

  const { commentText, reviewBelongs } = req.body;
  if (!commentText || commentText.trim() === '' || !reviewBelongs) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    const new__Comment = new Model__Comment({
      commentText,
      commentAuthor: req.user._id,
      reviewBelongs,
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
//@route  PUT /api/Comments/:id
//@access Private
exports.update__Comment = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body

  const { commentText } = req.body;
  const { id } = req.params;
  if (!commentText || commentText.trim() === '' || !id) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  try {
    const one__Comment = await Model__Comment.findById(id);

    if (
      req.user._id === one__Comment.commentAuthor ||
      req.user.role === 'admin'
    ) {
      const new__Comment = {
        commentText,
      };

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
    } else {
      return next(
        new ErrorResponse('Not authorized to access this route', 401)
      );
    }
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Comment
//@route  GET /api/Comments
//@access Private
exports.getAll__Comment = asyncHandler(async (req, res, next) => {
  try {
    const all__Comments = await Model__Comment.find()
      .populate({
        path: 'commentAuthor',
        select: 'name',
      })
      .populate({
        path: 'reviewBelongs',
        select: 'reviewText',
      })
      .sort({
        createdAt: -1,
      });
    // .exec();

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
//@route  GET /api/Comments/:id
//@access Private
exports.getOne__Comment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Comment = await Model__Comment.findById(id)
      .populate({
        path: 'commentAuthor',
        select: 'name',
      })
      .populate({
        path: 'reviewBelongs',
        select: 'reviewText',
      });
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
//@route  DELETE /api/Comments/:id
//@access Private
exports.delete__Comment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Comment = await Model__Comment.findById(id);

    if (!one__Comment) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    if (
      req.user._id === one__Comment.commentAuthor ||
      req.user.role === 'admin'
    ) {
      // await one__Comment.remove();
      await Model__Comment.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        data: {},
      });
    } else {
      return next(
        new ErrorResponse('Not authorized to access this route', 401)
      );
    }
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});
