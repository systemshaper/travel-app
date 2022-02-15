import { daysFromCurrentDate } from "./daysfromcurrent"
import { fetchKeys } from "./fetchKeys"



const checkWeather = async (lat, long, date) => {
    const daysAhead = daysFromCurrentDate(date)
    
    const apiKey = await fetchKeys().then(keys => keys.weatherbitKey)

    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${apiKey}&units=I`
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