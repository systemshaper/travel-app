import { fetchKeys } from "./fetchKeys"
import defaultImage from '../media/traveling.jpg'

const fetchImage = async (searchInput) => {
    const apiKey = await fetchKeys().then(keys => keys.pixabayKey)
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&category=travel`
    const imageResults = await fetch(url)
        .then(res => res.json())

    let imageUrl = await imageResults
    if ( imageResults.totalHits > 0 ) {
        imageUrl = await imageResults.hits[0].webformatURL
    } else {
        imageUrl = defaultImage
        console.log(defaultImage)
    }

    return imageUrl
}

export { fetchImage }