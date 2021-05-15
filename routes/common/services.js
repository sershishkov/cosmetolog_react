const express = require('express');

const {
  add__Service,
  update__Service,
  getAll__Service,
  getOne__Service,
  delete__Service,
  uploadPhoto,
  resizePhoto,
} = require('../../controllers/common/services');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Service);
router.get('/:id', getOne__Service);

router.use(protect);
router.use(authorize('admin'));

router.post('/', uploadPhoto, resizePhoto, add__Service);
router.put('/:id', uploadPhoto, resizePhoto, update__Service);
router.delete('/:id', delete__Service);

module.exports = router;
