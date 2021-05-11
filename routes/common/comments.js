const express = require('express');

const {
  add__Comment,
  update__Comment,
  getAll__Comment,
  getOne__Comment,
  delete__Comment,
} = require('../../controllers/common/comments');

const { protect } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Comment);
router.get('/:id', getOne__Comment);

router.use(protect);
// router.use(authorize('admin'));

router.post('/', add__Comment);
router.put('/:id', update__Comment);
router.delete('/:id', delete__Comment);

module.exports = router;
