const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');

const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const Model__Article = require('../../models/Model__Article');

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
      // console.log(err);
      // console.log(err.code);
      switch (err.code) {
        // case 'LIMIT_UNEXPECTED_FILE':
        //   res.end('Number of files choosen for uploading are greater than ' + 2)
        //   break
        case 'LIMIT_FILE_SIZE':
          return next(
            new ErrorResponse(
              `Choosen file size is greater than ${maxFileSize} bites`,
              422
            )
          );

        // break;
        // case 'INVALID_FILE_TYPE':
        //   res.end('Choosen file is of invalid type')
        //   break
        // case 'ENOENT':
        //   res.end('Unable to store the file')
        //   break
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

//@desc   Add a __Article
//@route  POST /api/admin/Articles
//@access Private
exports.add__Article = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
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
      const new__Article = await Model__Article.create({
        metaTitle,
        metaDescription,
        keyWords,
        header_H1,
        header_H2,
        header_H3,
        header_H4,
        imageAlt,
        imageUrl: `/uploads/${req.file.filename}`,
      });

      if (new__Article) {
        res.status(201).json({
          success: true,
          data: new__Article,
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

//@desc   Update a __Article
//@route  PUT /api/admin/Articles/:id
//@access Private
exports.update__Article = asyncHandler(async (req, res, next) => {
  //Check if  exists something in body
  const {
    metaTitle,
    metaDescription,
    keyWords,
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
    return next(new ErrorResponse('???? ???????????????? ????????????????', 400));
  }

  const new__Article = {
    metaTitle,
    metaDescription,
    keyWords,
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

    if (req.file) {
      const oldObj = await Model__Article.findById(req.params.id);
      fs.unlink(`.${oldObj.imageUrl}`, (err) => {
        console.log('fs.unlink', err);
      });
      new__Article.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updated__Article = await Model__Article.findByIdAndUpdate(
      id,
      new__Article,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updated__Article,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get all __Article
//@route  GET /api/admin/Articles
//@access Private
exports.getAll__Article = asyncHandler(async (req, res, next) => {
  try {
    const all__Articles = await Model__Article.find()
      .populate({
        path: 'keyWords',
        select: 'keyWord_text',
        // model: Model__KeyWord,
      })
      .sort({
        dateUpdated: -1,
      });

    if (!all__Articles) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: all__Articles,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Get one __Article
//@route  GET /api/admin/Articles/:id
//@access Private
exports.getOne__Article = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Article = await Model__Article.findById(id).populate({
      path: 'keyWords',
      select: 'keyWord_text',
      // model: Model__KeyWord,
    });
    if (!one__Article) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: one__Article,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   DELETE one __Article
//@route  DELETE /api/admin/Articles/:id
//@access Private
exports.delete__Article = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse('Please enter id.', 400));
  }

  try {
    const one__Article = await Model__Article.findByIdAndDelete(id);
    if (!one__Article) {
      res.status(400).json({
        success: false,
        message: 'No object with the given id',
      });
      return;
    }

    fs.unlink(`.${one__Article.imageUrl}`, (err) => {
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
