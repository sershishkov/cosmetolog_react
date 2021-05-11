const express = require('express');

const {
  add__Drug,
  update__Drug,
  getAll__Drug,
  getOne__Drug,
  delete__Drug,
} = require('../../controllers/common/drugs');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Drug);
router.get('/:id', getOne__Drug);

router.use(protect);
router.use(authorize('admin'));

router.post('/', add__Drug);
router.put('/:id', update__Drug);
router.delete('/:id', delete__Drug);

module.exports = router;
