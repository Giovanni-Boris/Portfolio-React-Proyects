const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");



const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.gyngb.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

dotenv.config();

const option = { useNewUrlParser: true, useUnifiedTopology: true}

console.log(process.env.USER_NAME,process.env.DBNAME);

mongoose.connect(uri,option)
	.then(()=> console.log('Base de datos conectada'))
	.catch(error => console.log('Error db: ', error))

app.listen(8800,()=>{
	console.log("Backend server is running! ",8888);
})