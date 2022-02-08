/* Global Variables */
const apiKey = '&appid=4b6f955094d76823d514ab6bf64a2680&units=imperial';
const postPath = 'http://localhost:3000/add'

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear();

//validate zip input
function checkZip(zip) {
    return /^\d{5}(-\d{4})?$/.test(zip);
}


const findCoordinates = async (location) => {
    const url = `http://api.geonames.org/search?q=${location}&maxRows=10&username=systemshaper&type=json`
    const coordinates = await fetch(url)
        .then(res => res.json())
    console.log('coordinates:', coordinates)
    return coordinates
}

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
const handleGenerate = (event) => {
    const userInput = document.querySelector('#zip').value;
    // const userFeelings = document.querySelector('#feelings').value;
    event.preventDefault();
    findCoordinates(userInput);
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


export { handleGenerate }