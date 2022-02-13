import { daysFromCurrentDate } from "./daysfromcurrent";

const weatherbitKey = '11c9c28e531743798eb27b63fee41a6a';

const checkWeather = async (lat, long, date) => {
    const daysAhead = daysFromCurrentDate(date)
    
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${weatherbitKey}&units=I`
    const response = await fetch(url)
        .then(res => res.json())

    const weatherForDate = response.data[daysAhead]
    const forecast = {
        weather: weatherForDate.weather.description,
        highTemp: weatherForDate.high_temp,
        lowTemp: weatherForDate.low_temp
    }
    
    console.log('forecast for target date:', weatherForDate)
    
    return forecast
}

export { checkWeather }