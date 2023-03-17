const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/messages");

require("dotenv").config();

mongoose.set("strictQuery", false);

//console.log(process.env.URL_MONGO)
// cors
var corsOption = {
	origin: "#",
	optionsSuccessStatus: 200,
};
app.use(cors({ corsOption }));

const option = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
	.connect(process.env.URL_MONGO, option)
	.then(() => console.log("Conected to mongoDB "))
	.catch((error) => console.log("Error db: ", error));

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	try {
		res.status(200).json("File uploaded sucessfully");
	} catch (err) {
		console.log(err);
	}
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(process.env.PORT || 8800, () => {
	console.log("Backend server is running! ", process.env.PORT || 8800);
});
