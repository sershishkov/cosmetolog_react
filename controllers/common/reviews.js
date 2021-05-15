const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Review = require('../../models/Model__Review');

//@desc   Add a __Review
//@route  POST /api/Reviews
//@access Private
exports.add__Review = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body

  const { reviewText, serviceBelongs } = req.body;
  if (!reviewText || reviewText.trim() === '' || !serviceBelongs) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    const new__Review = new Model__Review({
      reviewText,
      reviewAuthor: req.user._id,
      serviceBelongs,
    });

    await new__Review.save();

    res.status(201).json({
      success: true,
      data: new__Review,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update a __Review
//@route  PUT /api/Reviews/:id
//@access Private
exports.update__Review = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body

  const { reviewText } = req.body;
  const { id } = req.params;
  if (!reviewText || reviewText.trim() === '' || !id) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  try {
    const one__Review = await Model__Review.findById(id);

    if (
      req.user._id === one__Review.reviewAuthor ||
      req.user.role === 'admin'
    ) {
      const new__Review = {
        reviewText,
      };

      const updated__Review = await Model__Review.findByIdAndUpdate(
        id,
        new__Review,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(200).json({
        success: true,
        data: updated__Review,
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

//@desc   Get all __Review
//@route  GET /api/Reviews
//@access Private
exports.getAll__Review = asyncHandler(async (req, res, next) => {
  try {
    const all__Reviews = await Model__Review.find()
      .populate({
        path: 'reviewAuthor',
        select: 'name',
      })
      .populate({
        path: 'serviceBelongs',
        select: 'header_H1',
      })
      .sort({
        createdAt: -1,
      });
    // .exec();

    if (!all__Reviews) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Reviews,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Review
//@route  GET /api/Reviews/:id
//@access Private
exports.getOne__Review = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Review = await Model__Review.findById(id)
      .populate({
        path: 'reviewAuthor',
        select: 'name',
      })
      .populate({
        path: 'serviceBelongs',
        select: 'header_H1',
      });
    if (!one__Review) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Review,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Review
//@route  DELETE /api/Reviews/:id
//@access Private
exports.delete__Review = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Review = await Model__Review.findById(id);

    if (!one__Review) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    if (
      req.user._id === one__Review.reviewAuthor ||
      req.user.role === 'admin'
    ) {
      // await one__Review.remove();
      await Model__Review.findByIdAndDelete(id);

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
