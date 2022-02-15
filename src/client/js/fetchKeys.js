const fetchKeys = async () => {
    const keys = await fetch('http://localhost:8081/keys')
    .then(res => res.json())
    return keys
}

export { fetchKeys }