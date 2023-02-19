const router = require("express").Router();
const Movie = require("../models/Movie");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

route.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newMovie = new Movie(req.body);

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json(500);
  }
});

module.exports = router;
