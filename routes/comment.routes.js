const express = require('express');
const { getAllComments } = require('../controllers/comment.controller');
const router = express.Router();

router.get('/', getAllComments);

module.exports = router;
