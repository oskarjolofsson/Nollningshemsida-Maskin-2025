// Select the modal for displaying event details
const eventDetailsModal = document.getElementById('event-details');
// Select the close button inside the modal
const closeModal = eventDetailsModal.querySelector('.close');

function renderCalendar() {
    // Select the calendar container
    const calendar = document.querySelector('.calendar');
    
    // Select elements inside the modal for displaying event details
    const eventTitle = document.getElementById('event-title');
    const eventTime = document.getElementById('event-time');
    const eventDescription = document.getElementById('event-description');
    const eventLocation = document.getElementById('event-location');
    const eventDressCode = document.getElementById('event-dress-code');

    // Define the start and end dates for the calendar
    const startDate = new Date('2025-08-24');
    const endDate = new Date('2025-09-20');
    let currentDate = new Date(startDate); // Initialize the current date to the start date

    // Define the days of the week in Swedish
    const daysOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag','Söndag'];

    // Loop through each day from the start date to the end date
    while (currentDate <= endDate) {
        // Calculate the week number based on the start date
        const weekIndex = Math.floor((currentDate - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
        // Select the container for the current week
        const weekContainer = calendar.querySelector(`#week${weekIndex} .week`);
        // Create a container for the current day
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('day');
        // Add the date and day of the week to the day container
        dayContainer.innerHTML = `<h3>${currentDate.getDate()}. ${daysOfWeek[currentDate.getDay()]}</h3>`;

        // Filter events that match the current date
        const dayEvents = events.filter(event => new Date(event.date).toDateString() === currentDate.toDateString());
        // Loop through each event for the current day
        dayEvents.forEach(event => {
            // Create an element for the event
            const eventElement = document.createElement('div'); 
            eventElement.classList.add('event');
            eventElement.textContent = event.title; // Set the event title as the text content
            // Add a click event listener to display event details in the modal
            eventElement.addEventListener('click', () => {
                eventTitle.textContent = event.title; // Set the event title in the modal
                eventTime.innerHTML = `<strong>Tid:</strong> ${event.time}`; // Set the event time in the modal
                eventDescription.innerHTML = `<strong>Klädkod:</strong> ${event.dressCode}<br><br>${event.description}`; // Set the event description and dress code
                eventLocation.innerHTML = `<strong>Plats:</strong> ${event.location}`; // Set the event location
                eventDetailsModal.style.display = 'block'; // Show the modal

                // Adjust the body padding to account for the scrollbar width
                const scrollbarWidth = getScrollbarWidth();
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.body.classList.add('modal-open'); // Add a class to indicate the modal is open
            });
            // Append the event element to the day container
            dayContainer.appendChild(eventElement);
        });

        // Append the day container to the week container
        weekContainer.appendChild(dayContainer);
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Function to calculate the width of the scrollbar
    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    // Add a click event listener to the close button to hide the modal
    closeModal.addEventListener('click', () => {
        eventDetailsModal.style.display = 'none'; // Hide the modal
        document.body.classList.remove('modal-open'); // Remove the modal-open class
        document.body.style.paddingRight = ''; // Reset the body padding
    });

    // Add a click event listener to the window to close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === eventDetailsModal) { // Check if the click is outside the modal
            eventDetailsModal.style.display = 'none'; // Hide the modal
            document.body.classList.remove('modal-open'); // Remove the modal-open class
            document.body.style.paddingRight = ''; // Reset the body padding
        }
    });
});
