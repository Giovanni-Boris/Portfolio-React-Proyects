const router = require("express").Router();
const Conversation = require("../models/Conversation");
//newConv
router.post("/", async (req, res) => {
	const newConversation = Conversation({
		members: [req.body.senderId, req.body.receiverId],
	});

	try {
		const savedConversation = await newConversation.save();
		res.status(200).json(savedConversation);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//get cov of user

router.get("/:userId", async (req, res) => {
	try {
		const conversation = await Conversation.find({
			member: { $in: [req.params.userId] },
		});
		res.status(200).json(conversation);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
