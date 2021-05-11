const express = require('express');

const {
  add__KeyWord,
  update__KeyWord,
  getAll__KeyWord,
  getOne__KeyWord,
  delete__KeyWord,
} = require('../../controllers/common/keywords');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__KeyWord);
router.get('/:id', getOne__KeyWord);

router.use(protect);
router.use(authorize('admin'));

router.post('/', add__KeyWord);
router.put('/:id', update__KeyWord);
router.delete('/:id', delete__KeyWord);

module.exports = router;
