const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.get("/register", async(req,res)=>{
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

module.exports = router;