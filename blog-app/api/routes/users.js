const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { verifyTokenAndAuthorization } = require("./verifyToken");
//REGISTER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const updatedUser = User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
