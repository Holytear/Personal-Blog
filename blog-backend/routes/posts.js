const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Create a post
router.post('/', async (req, res) => {
  try {
    const token = req.headers.token;
    if (!token) return res.status(401).json("Access denied!");

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verified.id);
    const newPost = new BlogPost({
      title: req.body.title,
      content: req.body.content,
      author: user._id,
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find().populate('author', 'username');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

