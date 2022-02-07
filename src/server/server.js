// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 3000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const corsOptions ={
    origin:'*', 
 }
app.use(cors(corsOptions));

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
app.listen(port, () => console.log('my server is running on port ' + port));

// Setup Routes
const returnData = (request, response) => {
    response.send(projectData);
    console.log('get was called')
}
app.get('/retrieve', returnData)


const addData = (request, response) => {
    projectData = {
        temperature: request.body.temperature,
        date: request.body.date,
        userZip: request.body.userZip,
        userFeelings: request.body.userFeelings,
    };
    console.log('post was called, request.body is:');
    console.log(request.body);
    response.send(projectData);
}
app.post('/add', addData)