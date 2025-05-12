// Initialize an empty array to store the fetched events
const events = [];

// Helper to extract fields from description
function extractField(description, field) {
  if (!description) return "";
  const regex = new RegExp(`${field}\\s*[:：]\\s*([^\\n\\r]+)`, "i");
  const match = description.match(regex);
  return match ? match[1].trim() : "";
}

// Use the Fetch API to send a GET request to the Google Calendar API
fetch("/api/events")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    console.log("Fetched events from backend:", data);
    // Iterate over the list of events returned by the API
    data.items.forEach((item) => {
      let desc = item.description || "";

      // Extract fields
      const dressCode =
        extractField(desc, "Klädkod") || extractField(desc, "Dress code");
      const location = extractField(desc, "Plats") || item.location || "";

      // Remove extracted fields from description
      desc = desc
        .replace(/Klädkod\s*[:：]\s*[^\n\r]+/i, "")
        .replace(/Dress code\s*[:：]\s*[^\n\r]+/i, "")
        .replace(/Plats\s*[:：]\s*[^\n\r]+/i, "")
        .replace(/Location\s*[:：]\s*[^\n\r]+/i, "")
        .trim();

      events.push({
        date: item.start.date || item.start.dateTime,
        title: item.summary,
        time: item.start.dateTime
          ? new Date(item.start.dateTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
          : "",
        endTime:
          item.end && item.end.dateTime
            ? new Date(item.end.dateTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            : "",
        description: desc,
        dressCode,
        location,
      });
    });
    // Log the imported events to the console for debugging or verification
    console.log("Events imported:", events);

    // Call the calendar rendering function after events are populated
    renderCalendar();
  })
  .catch((error) =>
    // Log any errors that occur during the fetch or processing of events
    console.error("Error fetching events from backend:", error)
  );
