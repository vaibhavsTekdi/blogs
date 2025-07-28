const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res) => {
  const { title, content, category } = req.body;
  const post = new Post({ title, content, category, author: req.user._id });
  await post.save();
  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find()
    .populate('author', 'name')
    .populate('category', 'name');
  const comments = await Comment.find();
  res.json({ posts, comments });
};

exports.addComment = async (req, res) => {
  const comment = new Comment({
    text: req.body.text,
    post: req.params.postId,
    author: req.user._id
  });
  await comment.save();
  res.status(201).json(comment);
};

exports.getPostsByCategory = async (req, res) => {
  const posts = await Post.find({ category: req.params.categoryId })
    .populate('author', 'name')
    .populate('category', 'name');
  res.json(posts);
};

exports.getTrendingPosts = async (req, res) => {
  const trendingPosts = await Post.aggregate([
    {
      $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: 'post',
        as: 'comments'
      }
    },
    {
      $addFields: {
        commentsCount: { $size: '$comments' }
      }
    },
    { $sort: { commentsCount: -1 }},
    { $limit: 5 }
  ]);
  res.json(trendingPosts);
};
