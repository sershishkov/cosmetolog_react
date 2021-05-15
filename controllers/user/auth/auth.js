const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');

const ErrorResponse = require('../../../utils/errorResponse');
const asyncHandler = require('../../../middleware/async');
const User = require('../../../models/user/User');

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

exports.uploadPhoto = upload.single('myAvatar');

exports.resizePhoto = asyncHandler(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `${req.user.id}-${Date.now()}.jpeg`;

  if (req.file.size > 2000000) {
    await sharp(req.file.buffer)
      .resize({
        fit: sharp.fit.contain,
        width: 60,
        height: 60,
      })
      .toFormat('jpeg')
      .jpeg({ quality: 50 })
      .toFile(`uploads/${req.file.filename}`);
  } else {
    await sharp(req.file.buffer)
      .resize({
        fit: sharp.fit.contain,
        width: 60,
        height: 60,
      })
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(`uploads/${req.file.filename}`);
  }

  next();
});

//@desc   Register user
//@route  POST /api/auth/register
//@access Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    password,
  });

  sendTokenResponse(user, 200, res);
});

//@desc   Login user
//@route  POST /api/auth/login
//@access Public

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email or password', 400));
  }

  //Check for user
  const user = await User.findOne({ email: email.toLowerCase() }).select(
    '+password'
  );

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  //Check is password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

//@desc   Log user out / clear cookie
//@route  GET /api/auth/logout
//@access Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

//@desc   Get current logged user
//@route  GET /api/auth/me
//@access Private
exports.getMe = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

//@desc   Update user details
//@route  PUT /api/auth/updatedetails
//@access Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
  const { name, patronymic, lastName, telNumber, dateBirth, email } = req.body;
  const newUserDetails = {
    name,
    patronymic,
    lastName,
    telNumber,
    dateBirth,
    email,
  };
  try {
    if (req.file) {
      const oldObj = await User.findById(req.user._id);
      if (oldObj.myAvatar !== '/uploads/default_user.jpg') {
        fs.unlink(`.${oldObj.myAvatar}`, (err) => {
          console.log('fs.unlink', err);
        });
      }
      newUserDetails.myAvatar = `/uploads/${req.file.filename}`;
    }
    const user = await User.findByIdAndUpdate(req.user._id, newUserDetails, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json(error.message);
    return;
  }
});

//@desc   Update password
//@route  PUT /api/auth/updatepassword
//@access Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return next(new ErrorResponse('Invalid input', 422));
  }
  const user = await User.findById(req.user._id).select('+password');

  //Check current password
  if (!(await user.matchPassword(currentPassword))) {
    return next(new ErrorResponse('Password is incorrect', 401));
  }

  user.password = newPassword;
  await user.save();

  sendTokenResponse(user, 200, res);
});

//Get token from model , create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token });
};
