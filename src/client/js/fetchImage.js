import { fetchKeys } from "./fetchKeys"

const fetchImage = async (searchInput) => {
    const apiKey = await fetchKeys().then(keys => keys.pixabayKey)
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&category=travel`
    const imageResults = await fetch(url)
        .then(res => res.json())
    const imageUrl = await imageResults.hits[0].webformatURL
    console.log('fetched image url:', imageUrl)
    return imageUrl
}

export { fetchImage }