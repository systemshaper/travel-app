
import { createCountdown } from './countdown'
import { findCoordinates } from './findcoordinates'
import { checkWeather } from './checkweather'
import { fetchImage } from './fetchImage'
import { renderTripCards } from './tripCards'
import { v4 as uuid } from 'uuid'

// main functions
const createTrip = async (locationInput, dateInput) => {
    const { latitude, longitude } = await findCoordinates(locationInput)
    const imageUrl = await fetchImage(locationInput)
    const { weather, highTemp, lowTemp } = await checkWeather(latitude, longitude, dateInput)
    const newTrip = {
        tripId: uuid(),
        location: locationInput,
        date: dateInput,
        latitude,
        longitude,
        imageUrl,
        weather,
        highTemp,
        lowTemp,
        countdown: createCountdown(dateInput)
    }

    console.log('created a new trip with data:', newTrip)
    return newTrip
}

const saveTrip = async (tripData) => {
    const response = await fetch('http://localhost:8081/addtrip', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripData)
    })
    const updatedTrips = await response.json()
    console.log('trips after this save:', updatedTrips)
    return updatedTrips
}

const removeTrip = async (trip) => {
    const response = await fetch('http://localhost:8081/removetrip', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trip)
    })
    const updatedTrips = await response.json()
    return updatedTrips
}


// event handlers
const handleSubmit = (event) => {
    event.preventDefault()

    const locationInput = document.querySelector('#destination').value
    const dateInput = document.querySelector('#startdate').value

    createTrip(locationInput, dateInput)
        .then(trip => saveTrip(trip))
        .then(trips => renderTripCards(trips)) 
}

const handleRemove = (trip) => {
    removeTrip(trip).then(trips => renderTripCards(trips))
}


export { handleSubmit, handleRemove }