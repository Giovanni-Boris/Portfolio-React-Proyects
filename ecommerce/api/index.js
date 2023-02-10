const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//Routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
dotenv.config();
mongoose.set("strictQuery", false);

//console.log(process.env.MONGO_URL);
const option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
	.connect(process.env.MONGO_URL, option)
	.then(() => console.log("DB connection successfull"))
	.catch((error) => console.log("Error db: ", error));

//midleware
// cors
const corsOption = {
	origin: "#",
	optionsSuccessStatus: 200,
};
//other host can be reach to my api
app.use(cors({ corsOption }));
// is like body-parse but express.json is native from express
app.use(express.json());
//to draw in my console the request and the response eithter it wsa successfull or error
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

//console.log(process.env.PORT);
app.listen(process.env.PORT || 5000, () => {
	console.log("ken server is running!");
});
