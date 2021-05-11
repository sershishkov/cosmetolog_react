const express = require('express');

const {
  add__Article,
  update__Article,
  getAll__Article,
  getOne__Article,
  delete__Article,
  uploadPhoto,
  resizePhoto,
} = require('../../controllers/common/articles');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Article);
router.get('/:id', getOne__Article);

router.use(protect);
router.use(authorize('admin'));

router.post('/', uploadPhoto, resizePhoto, add__Article);
router.put('/:id', uploadPhoto, resizePhoto, update__Article);
router.delete('/:id', delete__Article);

module.exports = router;
