const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async(req,res)=>{
	try{
		//generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hahs(req.body.password, salt);
		
		//create user
		const user =  new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		//saver user and response
		await user.save();
		res.status(200).json(user);

	}catch(err){
		console.log(err);
	}
});

//LOGIN
router.post("/login", async(req,res)=>{
	try{
		const user = await User.findOne({eamil:req.body.email});
		!user && res.status.json("user not found"));

		const comparePassword = await bcrypt.compare(req.body.password, user.password);
		!comparePassword && res.status(00).json("wrong password");

		res.status(200).json(user);
	}catch(err){
		console.log(err);
	}
});
module.exports = router;
















































