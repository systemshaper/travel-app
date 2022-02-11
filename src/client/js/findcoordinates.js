const findCoordinates = async (location) => {
    const url = `http://api.geonames.org/search?q=${location}&maxRows=10&username=systemshaper&type=json`
    const coordinates = await fetch(url)
        .then(res => res.json())
    console.log('coordinates:', coordinates)
    return coordinates
}

export { findCoordinates }