// Define the Google Calendar ID for the calendar you want to fetch events from
const calendarId = 'c_fb49ccf9f14b8ff9908c636dc829a6cf0a50ad8813146f0e8dbbcf61e332f02d@group.calendar.google.com'; 

// Define the API key to authenticate requests to the Google Calendar API
const apiKey = 'AIzaSyAFR2lHzkj4bO3zZ13afczzybf07I1fL1I'; 

// Construct the URL for the Google Calendar API endpoint to fetch events
// The URL includes the calendar ID and the API key as query parameters
const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

// Initialize an empty array to store the fetched events
const events = [];

// Use the Fetch API to send a GET request to the Google Calendar API
fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Iterate over the list of events returned by the API
        data.items.forEach(item => {
            // Push each event into the `events` array with the desired structure
            events.push({
                // Use the event's start date or dateTime (if available)
                date: item.start.date || item.start.dateTime,
                // Use the event's summary as the title
                title: item.summary,
                // If the event has a specific time, format it as a localized time string
                time: item.start.dateTime ? new Date(item.start.dateTime).toLocaleTimeString() : '',
                // Use the event's description, or an empty string if not provided
                description: item.description || '', 
            });
        });
        // Log the imported events to the console for debugging or verification
        console.log('Events imported:', events);

        // Call the calendar rendering function after events are populated
        renderCalendar();
    })
    .catch(error => 
        // Log any errors that occur during the fetch or processing of events
        console.error('Error fetching Google Calendar events:', error)
    );
