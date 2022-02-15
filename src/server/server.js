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

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
app.listen(port, () => console.log('my server is running on port ' + port));

// Setup Routes
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
        countdown: request.body.countdown
    };
    trips.push(trip)
    response.send(trips)
}
app.post('/addtrip', addTrip)

const removeTrip = (request, response) => {
    console.log('removeTrip was called for', request.body.tripId)
    const tripIndex = trips.findIndex(trip => trip.tripId === request.body.tripId)
    console.log('index of trip to remove:', tripIndex)
    console.log('trips before removal', trips)
    trips.splice(tripIndex, 1)
    console.log('trips after splice removal', trips)
    response.send(trips)
}
app.post('/removetrip', removeTrip)