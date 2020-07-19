// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 8000;
// Require Express to run server and routes
const express = require('express');
const app = express();
// Start up an instance of app

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.get('/', home);
function home(req, res) {
  res.send('hello world');
}

app.listen(port, listing);
function listing() {
  console.log(`App is running on port ${port}`);
}