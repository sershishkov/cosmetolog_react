const express = require('express');

const {
  add__Review,
  update__Review,
  getAll__Review,
  getOne__Review,
  delete__Review,
} = require('../../controllers/common/reviews');

const { protect } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Review);
router.get('/:id', getOne__Review);

router.use(protect);
// router.use(authorize('admin'));

router.post('/', add__Review);
router.put('/:id', update__Review);
router.delete('/:id', delete__Review);

module.exports = router;
