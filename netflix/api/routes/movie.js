const router = require("express").Router();
const Movie = require("../models/Movie");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//created
route.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newMovie = new Movie(req.body);

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json(500);
  }
});

//UPDATE
route.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateMovie);
  } catch (err) {
    res.status(500).json(500);
  }
});

module.exports = router;
