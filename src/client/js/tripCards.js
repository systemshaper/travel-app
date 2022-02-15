// const sectionsList = Array.from(document.querySelectorAll('section'));
import { handleRemove } from "./app";

const renderTripCards = (trips) => {
    const tripListHolder = document.querySelector('.trip_list');

    // clear all the current cards before rendering new list
    while (tripListHolder.firstChild) {
        tripListHolder.removeChild(tripListHolder.firstChild)
    }

    // create card elements for each trip item in the array
    trips.map(trip => {
        const card = document.createElement('div')
        const cardString = 
            `<div class="holder tripCard" id="${trip.tripId}">
                <img src="${trip.imageUrl}">
                <div>My trip to: ${trip.location}</div>
                <div>${trip.countdown}</div>
                <div class="weather">
                    <div>weather summary: ${trip.weather}</div>
                    <div class="temperature">
                        <div>high temp: ${trip.highTemp}</div>
                        <div>low temp: ${trip.lowTemp}</div>
                    </div>
                </div>
                <button type="button" id="removebutton${trip.tripId}">remove trip</button>
            </div>`
        card.innerHTML = cardString

        tripListHolder.appendChild(card)
        
        document.querySelector(`#removebutton${trip.tripId}`).addEventListener('click', () => {handleRemove(trip)})
    }) 
}

export { renderTripCards }