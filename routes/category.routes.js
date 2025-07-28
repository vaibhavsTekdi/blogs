const express = require('express');
const auth = require('../middleware/auth');
const { createCategory, getAllCategories } = require('../controllers/category.controller');
const router = express.Router();

router.post('/', auth, createCategory);
router.get('/', getAllCategories);

module.exports = router;
