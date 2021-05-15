const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');

const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Service = require('../../models/Model__Service');

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

//@desc   Add a __Service
//@route  POST /api/admin/Services
//@access Private
exports.add__Service = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
    procedures,
    header_H1,

    advantageHeader_H2,
    advantageDescription,
    timing_H2,
    timingDescription,
    preparationHeader_H2,
    preparationDescription,
    recoveryAfterServiceHeader_H2,
    recoveryAfterServiceDescription,
    resultHeader_H2,
    resultDescription,
    priceHeader_H2,
    priceDescription,

    imageAlt,
  } = req.body;

  if (
    !metaTitle ||
    metaTitle.trim() === '' ||
    !metaDescription ||
    metaDescription.trim() === '' ||
    !keyWords ||
    keyWords.length === 0 ||
    !procedures ||
    procedures.length === 0 ||
    !header_H1 ||
    header_H1.trim() === '' ||
    !advantageHeader_H2 ||
    advantageHeader_H2.trim() === '' ||
    !advantageDescription ||
    advantageDescription.trim() === '' ||
    !timing_H2 ||
    timing_H2.trim() === '' ||
    !timingDescription ||
    timingDescription.trim() === '' ||
    !preparationHeader_H2 ||
    preparationHeader_H2.trim() === '' ||
    !preparationDescription ||
    preparationDescription.trim() === '' ||
    !recoveryAfterServiceHeader_H2 ||
    recoveryAfterServiceHeader_H2.trim() === '' ||
    !recoveryAfterServiceDescription ||
    recoveryAfterServiceDescription.trim() === '' ||
    !resultHeader_H2 ||
    resultHeader_H2.trim() === '' ||
    !resultDescription ||
    resultDescription.trim() === '' ||
    !priceHeader_H2 ||
    priceHeader_H2.trim() === '' ||
    !priceDescription ||
    priceDescription.trim() === '' ||
    !imageAlt ||
    imageAlt.trim() === '' ||
    !req.file.filename
  ) {
    return next(new ErrorResponse('Invalid input', 422));
  }

  try {
    if (req.file.filename) {
      const new__Service = await Model__Service.create({
        metaTitle,
        metaDescription,
        keyWords,
        procedures,
        header_H1,

        advantageHeader_H2,
        advantageDescription,
        timing_H2,
        timingDescription,
        preparationHeader_H2,
        preparationDescription,
        recoveryAfterServiceHeader_H2,
        recoveryAfterServiceDescription,
        resultHeader_H2,
        resultDescription,
        priceHeader_H2,
        priceDescription,

        imageAlt,
        imageUrl: `/uploads/${req.file.filename}`,
      });

      if (new__Service) {
        res.status(201).json({
          success: true,
          data: new__Service,
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

//@desc   Update a __Service
//@route  PUT /api/admin/Services/:id
//@access Private
exports.update__Service = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
    procedures,
    header_H1,

    advantageHeader_H2,
    advantageDescription,
    timing_H2,
    timingDescription,
    preparationHeader_H2,
    preparationDescription,
    recoveryAfterServiceHeader_H2,
    recoveryAfterServiceDescription,
    resultHeader_H2,
    resultDescription,
    priceHeader_H2,
    priceDescription,

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
    !procedures ||
    procedures.length === 0 ||
    !header_H1 ||
    header_H1.trim() === '' ||
    !advantageHeader_H2 ||
    advantageHeader_H2.trim() === '' ||
    !advantageDescription ||
    advantageDescription.trim() === '' ||
    !timing_H2 ||
    timing_H2.trim() === '' ||
    !timingDescription ||
    timingDescription.trim() === '' ||
    !preparationHeader_H2 ||
    preparationHeader_H2.trim() === '' ||
    !preparationDescription ||
    preparationDescription.trim() === '' ||
    !recoveryAfterServiceHeader_H2 ||
    recoveryAfterServiceHeader_H2.trim() === '' ||
    !recoveryAfterServiceDescription ||
    recoveryAfterServiceDescription.trim() === '' ||
    !resultHeader_H2 ||
    resultHeader_H2.trim() === '' ||
    !resultDescription ||
    resultDescription.trim() === '' ||
    !priceHeader_H2 ||
    priceHeader_H2.trim() === '' ||
    !priceDescription ||
    priceDescription.trim() === '' ||
    !imageAlt ||
    imageAlt.trim() === '' ||
    !id
    // !req.file
  ) {
    return next(new ErrorResponse('Не переданы значения', 400));
  }

  const new__Service = {
    metaTitle,
    metaDescription,
    keyWords,
    procedures,
    header_H1,

    advantageHeader_H2,
    advantageDescription,
    timing_H2,
    timingDescription,
    preparationHeader_H2,
    preparationDescription,
    recoveryAfterServiceHeader_H2,
    recoveryAfterServiceDescription,
    resultHeader_H2,
    resultDescription,
    priceHeader_H2,
    priceDescription,

    imageAlt,
    dateUpdated: new Date(),
  };

  try {
    // fs.readdir('./uploads/', (err, files) => {
    //   files.forEach((file) => {
    //     console.log(file);
    //   });
    // });

    if (req.file) {
      const oldObj = await Model__Service.findById(req.params.id);
      fs.unlink(`.${oldObj.imageUrl}`, (err) => {
        console.log('fs.unlink', err);
      });
      new__Service.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updated__Service = await Model__Service.findByIdAndUpdate(
      id,
      new__Service,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updated__Service,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Service
//@route  GET /api/admin/Services
//@access Private
exports.getAll__Service = asyncHandler(async (req, res, next) => {
  try {
    const all__Services = await Model__Service.find()
      .populate({
        path: 'keyWords',
        select: 'keyWord_text',
      })
      .populate({
        path: 'procedures',
        select: 'header_H1',
      })
      .sort({
        header_H1: 1,
      });

    if (!all__Services) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Services,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Service
//@route  GET /api/admin/Services/:id
//@access Private
exports.getOne__Service = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Service = await Model__Service.findById(id)
      .populate({
        path: 'keyWords',
        select: 'keyWord_text',
      })
      .populate({
        path: 'procedures',
        select: 'header_H1',
      });
    if (!one__Service) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Service,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Service
//@route  DELETE /api/admin/Services/:id
//@access Private
exports.delete__Service = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Service = await Model__Service.findByIdAndDelete(id);
    if (!one__Service) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    fs.unlink(`.${one__Service.imageUrl}`, (err) => {
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
