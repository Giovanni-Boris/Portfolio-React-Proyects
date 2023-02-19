const router = require("express").Router();
const List = require("../models/List");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newList = new List(req.body);

  try {
    const savedList = await newList.saved();
    res.status(200).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.status(200).json("The list has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
