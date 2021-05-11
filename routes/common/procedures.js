const express = require('express');

const {
  add__Procedure,
  update__Procedure,
  getAll__Procedure,
  getOne__Procedure,
  delete__Procedure,
} = require('../../controllers/common/procedures');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Procedure);
router.get('/:id', getOne__Procedure);

router.use(protect);
router.use(authorize('admin'));

router.post('/', add__Procedure);
router.put('/:id', update__Procedure);
router.delete('/:id', delete__Procedure);

module.exports = router;
