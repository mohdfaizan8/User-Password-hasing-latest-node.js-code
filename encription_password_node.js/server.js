// Importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
  
// Initialize express app
var app = express();

  //Employees--Employees_data

// Mongodb connection url
var MONGODB_URI = "mongodb://localhost:27017/Employees";
  
// Connect to MongoDB
mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB @ 27017');
});
  
// Using bodyparser to parse json data
app.use(bodyparser.json());
  
// Importing routes
const user = require('./routes/user');
  
// Use user route when url matches /api/user/
app.use('/api/user', user);
  
// Creating server
const port = 3000;
app.listen(port, () => {
    console.log("Server running at port: " + port);
});