const express = require('express');

const {
  add__Service,
  update__Service,
  getAll__Service,
  getOne__Service,
  delete__Service,
} = require('../../controllers/common/services');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Service);
router.get('/:id', getOne__Service);

router.use(protect);
router.use(authorize('admin'));

router.post('/', add__Service);
router.put('/:id', update__Service);
router.delete('/:id', delete__Service);

module.exports = router;
