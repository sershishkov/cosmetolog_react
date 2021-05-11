const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Drug = require('../../models/Model__Drug');

//@desc   Add a __Drug
//@route  POST /api/admin/drugs
//@access Private
exports.add__Drug = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const { drugName, drugDescription } = req.body;
  if (
    !drugName ||
    drugName.trim() === '' ||
    !drugDescription ||
    drugDescription.trim() === ''
  ) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    const new__Drug = new Model__Drug({
      drugName,
      drugDescription,
    });

    await new__Drug.save();

    res.status(201).json({
      success: true,
      data: new__Drug,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update a __Drug
//@route  PUT /api/admin/drugs/:id
//@access Private
exports.update__Drug = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const { drugName, drugDescription } = req.body;
  const { id } = req.params;
  if (
    !drugName ||
    drugName.trim() === '' ||
    !drugDescription ||
    drugDescription.trim() === '' ||
    !id
  ) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  const new__Drug = {
    drugName,
    drugDescription,
  };

  try {
    const updated__Drug = await Model__Drug.findByIdAndUpdate(id, new__Drug, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: updated__Drug,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Drug
//@route  GET /api/admin/drugs
//@access Private
exports.getAll__Drug = asyncHandler(async (req, res, next) => {
  try {
    const all__Drugs = await Model__Drug.find().sort({
      drugName: 1,
    });

    if (!all__Drugs) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Drugs,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Drug
//@route  GET /api/admin/drugs/:id
//@access Private
exports.getOne__Drug = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Drug = await Model__Drug.findById(id);
    if (!one__Drug) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Drug,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Drug
//@route  DELETE /api/admin/drugs/:id
//@access Private
exports.delete__Drug = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Drug = await Model__Drug.findByIdAndDelete(id);
    if (!one__Drug) {
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
