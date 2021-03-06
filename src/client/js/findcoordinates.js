const findCoordinates = async (location) => {
    const url = `http://api.geonames.org/search?q=${location}&maxRows=10&username=systemshaper&type=json`
    const response = await fetch(url)
        .then(res => res.json())
    if (response.totalResultsCount === 0) {
        alert('That location could not be found, please try another')
    }

    const latitude = response.geonames[0].lat
    const longitude = response.geonames[0].lng
    const coordinates = { latitude, longitude }
    console.log('coordinates:', coordinates)
    return coordinates
}

export { findCoordinates }