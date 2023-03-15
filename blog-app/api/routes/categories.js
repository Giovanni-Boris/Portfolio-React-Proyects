const router = require("express").Router();
const Category = require("../models/Category");
const { verifyToken } = require("./verifyToken");

router.post("/", verifyToken, async (req, res) => {
  const newCat = new Category(rqe.body);
  try {
    const savedCat = await newCat.save();
    res.status(201).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
