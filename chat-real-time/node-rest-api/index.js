const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

require("dotenv").config()

mongoose.set('strictQuery', false);

console.log(process.env.URL_MONGO)

const uri = `mongodb+srv://boris-social:qj1DKhAfBDs5gwLI@cluster0.gyngb.mongodb.net/social?retryWrites=true&w=majority

`;

const option = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.URL_MONGO,option)
	.then(()=> console.log('Conected to mongoDB '))
	.catch(error => console.log('Error db: ', error))


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);





app.listen(8800,()=>{
	console.log("Backend server is running! ",8888);
})