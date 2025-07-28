const Comment = require('../models/Comment');

exports.getAllComments = async (req, res) => {
  const comments = await Comment.find().populate('author', 'name');
  res.json(comments);
};
