const weatherbitKey = '11c9c28e531743798eb27b63fee41a6a';

const checkWeather = async (lat, long, date) => {
    const current = new Date()
    const target = new Date(date)
    const difference = target.getTime() - current.getTime()
    const daysAhead = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${weatherbitKey}`
    const weather = await fetch(url)
        .then(res => res.json())

    const weatherForDate = weather['data'][daysAhead]
    
    console.log('full forecast:', weather)
    console.log('forecast for target date:', weatherForDate)
    
    return weatherForDate
}

export { checkWeather }