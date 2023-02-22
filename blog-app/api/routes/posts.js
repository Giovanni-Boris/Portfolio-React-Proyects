const router = require("express").Router();
const Post = require("../models/Post");
const verifyToken = require("../verifyToken");

//CREATE POST
router.post("/", verifyToken, async (req, res) => {
  const newPost = new Post(rqe.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET POST
router.post();

module.exports = router;
