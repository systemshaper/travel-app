const pixabayKey = '25676820-bcd461f51d45cd7adb043ce89'

const fetchImage = async (searchInput) => {
    const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${searchInput}&image_type=photo&category=travel`
    const imageResults = await fetch(url)
        .then(res => res.json())
    const imageUrl = await imageResults.hits[0].webformatURL
    console.log('fetched image url:', imageUrl)
    return imageUrl
}

export { fetchImage }