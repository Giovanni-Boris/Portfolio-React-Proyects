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

//GET
router.get("/", verifyToken, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try{
    if(typeQuery){
      if(genreQuery){
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    }else{
      list = await List.aggregate([{ $sample: { size:10 }}])
    }
    res.status(200).json(list);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }

module.exports = router;
