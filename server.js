///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require('dotenv').config()

// pull PORT from .env, give default value of 3000
const {PORT} = process.env

// import express
const express = require('express')

// create application object
const app = express()
// add this - import middlware
const cors = require("cors");

//import all available routes in our /routes/index.js the user can use
const routes = require('./routes/index')

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies


///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
// app.get("/", (req, res) => {
//     res.send("hello world");
//   });

//check the routes index.js for ALL routes so we save space on server.js
app.use('/', routes)

//catch all 404 route! 
//404 means missing
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})




///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));