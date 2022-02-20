
const restrictDateRange = () => {
    let date = new Date()
    const dateInput = document.querySelector('#startdate')

    const today = date.toISOString().split('T')[0]
    dateInput.setAttribute('min', today)


    date.setDate(date.getDate() + 15)
    const maxDate = date.toISOString().split('T')[0]
    dateInput.setAttribute('max', maxDate)
}

export { restrictDateRange }