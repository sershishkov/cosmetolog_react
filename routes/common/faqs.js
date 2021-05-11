const express = require('express');

const {
  add__Faq,
  update__Faq,
  getAll__Faq,
  getOne__Faq,
  delete__Faq,
} = require('../../controllers/common/faqs');

const { protect, authorize } = require('../../middleware/auth');

const router = express.Router();

router.get('/', getAll__Faq);
router.get('/:id', getOne__Faq);

router.use(protect);
router.use(authorize('admin'));

router.post('/', add__Faq);
router.put('/:id', update__Faq);
router.delete('/:id', delete__Faq);

module.exports = router;
