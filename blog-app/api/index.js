const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const app = express();
const path = require("path");
//routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
//config
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
//public routes
app.use("/images", express.static(path.join(__dirname, "/images")));

//IMG  cb error
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//midleware

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend running in PORT ", process.env.PORT || 5000);
});
