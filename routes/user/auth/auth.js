const express = require('express');

const {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword,
  uploadPhoto,
  resizePhoto,
} = require('../../../controllers/user/auth/auth');

const { protect } = require('../../../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, uploadPhoto, resizePhoto, updateDetails);
router.put('/updatepassword', protect, updatePassword);

module.exports = router;
