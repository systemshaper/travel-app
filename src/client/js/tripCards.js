// const sectionsList = Array.from(document.querySelectorAll('section'));

const createTripCards = (trips) => {
    const tripListHolder = document.querySelector('.trip_list');

    trips.map(trip => {
        const card = document.createElement('div')
        const cardString = 
            `<div class="tripCard">
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
            </div>`
        card.innerHTML = cardString

        tripListHolder.append(card)
        // navItem.classList.add('menu__link');
        // navItem.setAttribute('navtarget', sectionId);
        // navItems.push(navItem);
    }) 
}

// document.addEventListener('DOMContentLoaded', createNavItems(sectionsList));



const removeTripCard = () => {

}

export { createTripCards, removeTripCard }