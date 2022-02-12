
import { createCountdown } from './countdown'
import { findCoordinates } from './findcoordinates'
import { checkWeather } from './checkweather'
import { fetchImage } from './fetchImage'
import { createTripCards } from './tripCards'

/* Global Variables */



// Create a new date instance dynamically with JS
let d = new Date()
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear()


// Save data
const postWeather = async (path, data) => {
    const response = await fetch(path, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const updatedData = await response.json()
        console.log('ran postWeather, response below:')
        console.log(updatedData)
        return updatedData
    }catch(error) {
        console.log('error', error)
    }

}

// retrieve latest data
const getData = async (res) => {
    console.log('running get data with passed response:', res)
    const data = await fetch('http://localhost:8081/retrieve').then(res => res.json())
    console.log('ran getData, should be data below')
    console.log(data)
    updateUI(data)
}

// update with latest data
const updateUI = (data) => {
    document.querySelector('#date').textContent = data.date
    document.querySelector('#temp').textContent = data.temperature
    document.querySelector('#content').textContent = data.userFeelings
}

// listen for submit then call apis
const handleSubmit = (event) => {
    const locationInput = document.querySelector('#destination').value
    const dateInput = document.querySelector('#startdate').value

    const trips = []
    const exampleTrip = {
        location: 'Dallas',
        date: '02/19/2022',
        latitude: "32.78306",
        longitude: "-96.80667",
        imageUrl: 'https://pixabay.com/get/g25d79ad6bac7c406dce33c871ca3dc61e707d58de0803e7fd19e0a63780d3aaf391e3021a90d8c661113e3ccda3d17324a31ce117b9c25d46659883f5a53229f_640.jpg',
        weather: 'Scattered clouds',
        highTemp: 8.1,
        lowTemp: 5.3,
        countdown: 'Your trip begins in just 7 days!'
    }
    trips.push(exampleTrip)

    event.preventDefault()
    findCoordinates(locationInput)
    createCountdown(dateInput)
    checkWeather(exampleTrip.latitude, exampleTrip.longitude, dateInput)
    fetchImage(locationInput)
    createTripCards(trips)
    // if (!checkZip(userZip)) {
    //     alert('please enter a valid US zip code');
    // } else {
    //     checkWeather(userZip)
    //     .then(data => postWeather(postPath, {
    //        temperature: data.main.temp,
    //        date: newDate,
    //        userZip,
    //        userFeelings, 
    //     }))
    //     .then(res => getData(res));
    // }   
}


export { handleSubmit }