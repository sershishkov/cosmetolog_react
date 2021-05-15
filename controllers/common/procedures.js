const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');

const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Procedure = require('../../models/Model__Procedure');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new ErrorResponse('Not an image! Please upload only images.', 400),
      false
    );
  }
};

const maxFileSize = 5 * 1000000;

const upload = multer({
  limits: { fileSize: maxFileSize },
  storage: multerStorage,
  fileFilter: multerFilter,
  onError: function (err, next) {
    if (err) {
      switch (err.code) {
        case 'LIMIT_FILE_SIZE':
          return next(
            new ErrorResponse(
              `Choosen file size is greater than ${maxFileSize} bites`,
              422
            )
          );

        default:
          return next(new ErrorResponse(`${err.code} -  ${err}`, 500));
      }
    }
  },
});

exports.uploadPhoto = upload.single('photoWork');

exports.resizePhoto = asyncHandler(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `${req.user.id}-${Date.now()}.jpeg`;

  if (req.file.size > 2000000) {
    await sharp(req.file.buffer)
      .resize({
        fit: sharp.fit.contain,
        width: 600,
      })
      .toFormat('jpeg')
      .jpeg({ quality: 50 })
      .toFile(`uploads/${req.file.filename}`);
  } else {
    await sharp(req.file.buffer)
      .resize({
        fit: sharp.fit.contain,
        width: 600,
      })
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(`uploads/${req.file.filename}`);
  }

  next();
});

//@desc   Add a __Procedure
//@route  POST /api/admin/Procedures
//@access Private
exports.add__Procedure = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
    drugs,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
  } = req.body;

  if (
    !metaTitle ||
    metaTitle.trim() === '' ||
    !metaDescription ||
    metaDescription.trim() === '' ||
    !keyWords ||
    keyWords.length === 0 ||
    !drugs ||
    drugs.length === 0 ||
    !header_H1 ||
    header_H1.trim() === '' ||
    !header_H2 ||
    header_H2.trim() === '' ||
    !header_H3 ||
    header_H3.trim() === '' ||
    !header_H4 ||
    header_H4.trim() === '' ||
    !imageAlt ||
    imageAlt.trim() === '' ||
    !req.file.filename
  ) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    if (req.file.filename) {
      const new__Procedure = await Model__Procedure.create({
        metaTitle,
        metaDescription,
        keyWords,
        drugs,
        header_H1,
        header_H2,
        header_H3,
        header_H4,
        imageAlt,
        imageUrl: `/uploads/${req.file.filename}`,
      });

      if (new__Procedure) {
        res.status(201).json({
          success: true,
          data: new__Procedure,
        });
      } else {
        return next(new ErrorResponse('Object was not created', 500));
      }
    } else {
      return next(new ErrorResponse('File has not been named', 500));
    }
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update a __Procedure
//@route  PUT /api/admin/Procedures/:id
//@access Private
exports.update__Procedure = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
    drugs,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
  } = req.body;
  const { id } = req.params;
  if (
    !metaTitle ||
    metaTitle.trim() === '' ||
    !metaDescription ||
    metaDescription.trim() === '' ||
    !keyWords ||
    keyWords.length === 0 ||
    !drugs ||
    drugs.length === 0 ||
    !header_H1 ||
    header_H1.trim() === '' ||
    !header_H2 ||
    header_H2.trim() === '' ||
    !header_H3 ||
    header_H3.trim() === '' ||
    !header_H4 ||
    header_H4.trim() === '' ||
    !imageAlt ||
    imageAlt.trim() === '' ||
    !id
    // !req.file
  ) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  const new__Procedure = {
    metaTitle,
    metaDescription,
    keyWords,
    drugs,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
    dateUpdated: new Date(),
  };

  try {
    // fs.readdir('./uploads/', (err, files) => {
    //   files.forEach((file) => {
    //     console.log(file);
    //   });
    // });

    const oldObj = await Model__Procedure.findById(req.params.id);
    if (req.file) {
      fs.unlink(`.${oldObj.imageUrl}`, (err) => {
        console.log('fs.unlink', err);
      });
      new__Procedure.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updated__Procedure = await Model__Procedure.findByIdAndUpdate(
      id,
      new__Procedure,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updated__Procedure,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Procedure
//@route  GET /api/admin/Procedures
//@access Private
exports.getAll__Procedure = asyncHandler(async (req, res, next) => {
  try {
    const all__Procedures = await Model__Procedure.find()
      .populate({
        path: 'keyWords',
        select: 'keyWord_text',
      })
      .populate({
        path: 'drugs',
        select: 'drugName',
      })
      .sort({
        header_H1: 1,
      });

    if (!all__Procedures) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Procedures,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Procedure
//@route  GET /api/admin/Procedures/:id
//@access Private
exports.getOne__Procedure = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Procedure = await Model__Procedure.findById(id)
      .populate({
        path: 'keyWords',
        select: 'keyWord_text',
      })
      .populate({
        path: 'drugs',
        select: 'drugName',
      });
    if (!one__Procedure) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Procedure,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Procedure
//@route  DELETE /api/admin/Procedures/:id
//@access Private
exports.delete__Procedure = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Procedure = await Model__Procedure.findByIdAndDelete(id);
    if (!one__Procedure) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    fs.unlink(`.${one__Procedure.imageUrl}`, (err) => {
      console.log('fs.unlink', err);
    });

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});
