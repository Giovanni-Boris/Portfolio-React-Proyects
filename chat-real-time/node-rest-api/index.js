const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
mongoose.set('strictQuery', false);
dotenv.config();


const uri = `mongodb+srv://boris-social:qj1DKhAfBDs5gwLI@cluster0.gyngb.mongodb.net/social?retryWrites=true&w=majority

`;

const option = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri,option)
	.then(()=> console.log('Conected to mongoDB '))
	.catch(error => console.log('Error db: ', error))

app.listen(8800,()=>{
	console.log("Backend server is running! ",8888);
})