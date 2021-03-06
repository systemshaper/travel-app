//endpoint for trip info
const trips = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 8081;

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

// dotenv to load environment variables
const dotenv = require('dotenv')
dotenv.config()

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
app.listen(port, () => console.log('my server is running on port ' + port));


// Setup Routes
const sendKeys = (request, response) => {
    response.send({
        weatherbitKey: process.env.WEATHERBIT_KEY,
        pixabayKey: process.env.PIXABAY_KEY
    })
}
app.get('/keys', sendKeys)

const retrieveTrips = (request, response) => {
    response.send(trips);
    console.log('retrieveTrips was called')
}
app.get('/retrievetrips', retrieveTrips)

const addTrip = (request, response) => {
    const trip = {
        tripId: request.body.tripId,
        location: request.body.location,
        date: request.body.date,
        latitude: request.body.latitude,
        longitude: request.body.longitude,
        imageUrl: request.body.imageUrl,
        weather: request.body.weather,
        highTemp: request.body.highTemp,
        lowTemp: request.body.lowTemp,
        countdownMessage: request.body.countdownMessage,
        countdown: request.body.countdown
    };
    trips.push(trip)
    response.send(trips)
}
app.post('/addtrip', addTrip)

const removeTrip = (request, response) => {
    const tripIndex = trips.findIndex(trip => trip.tripId === request.body.tripId)
    trips.splice(tripIndex, 1)
    response.send(trips)
}
app.post('/removetrip', removeTrip)