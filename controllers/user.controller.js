const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};
