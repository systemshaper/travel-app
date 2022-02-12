
import { createCountdown } from './countdown'
import { findCoordinates } from './findcoordinates'
import { checkWeather } from './checkweather'

/* Global Variables */



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear();


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
        const updatedData = await response.json();
        console.log('ran postWeather, response below:');
        console.log(updatedData)
        return updatedData; 
    }catch(error) {
        console.log('error', error);
    }

}

// retrieve latest data
const getData = async (res) => {
    console.log('running get data with passed response:', res)
    const data = await fetch('http://localhost:8081/retrieve').then(res => res.json());
    console.log('ran getData, should be data below');
    console.log(data);
    updateUI(data);
}

// update with latest data
const updateUI = (data) => {
    document.querySelector('#date').textContent = data.date;
    document.querySelector('#temp').textContent = data.temperature;
    document.querySelector('#content').textContent = data.userFeelings;
}

// listen for submit then call apis
const handleSubmit = (event) => {
    const locationInput = document.querySelector('#destination').value;
    const dateInput = document.querySelector('#startdate').value;

    const latitude = "32.78306"
    const longitude = "-96.80667"

    event.preventDefault();
    findCoordinates(locationInput);
    createCountdown(dateInput);
    checkWeather(latitude, longitude, dateInput)
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