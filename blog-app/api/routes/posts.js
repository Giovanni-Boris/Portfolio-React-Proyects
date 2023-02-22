const router = require("express").Router();
const Post = require("../models/Post");
const verifyToken = require("../verifyToken");

//CREATE POST
router.post("/:id", verifyToken, async (req, res) => {
  const newPost = new Post(rqe.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
