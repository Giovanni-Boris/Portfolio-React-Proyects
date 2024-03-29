const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

//routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

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

//midlleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("ken server is running! ", 5000);
});
