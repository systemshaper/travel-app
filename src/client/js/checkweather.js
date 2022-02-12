import { daysFromCurrentDate } from "./daysfromcurrent";

const weatherbitKey = '11c9c28e531743798eb27b63fee41a6a';

const checkWeather = async (lat, long, date) => {
    const daysAhead = daysFromCurrentDate(date)
    
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${weatherbitKey}`
    const weather = await fetch(url)
        .then(res => res.json())

    const weatherForDate = weather['data'][daysAhead]
    
    console.log('full forecast:', weather)
    console.log('forecast for target date:', weatherForDate)
    
    return weatherForDate
}

export { checkWeather }