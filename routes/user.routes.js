const express = require('express');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const User = require('../models/User');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
});

router.get('/', auth, isAdmin, async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = router;
