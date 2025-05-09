const express = require("express");
const app = express();

// Environment variables for sensitive data
require("dotenv").config();
const calendarId = process.env.CALENDAR_ID || "";
const apiKey = process.env.API_KEY || "";
const PORT = process.env.PORT || 5000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// API route to fetch events
app.get("/api/events", async (req, res) => {
  try {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("Error from Google API:", data.error);
      return res
        .status(500)
        .json({ error: "Error fetching events from Google API" });
    }

    res.json(data); // Send events to the frontend
  } catch (error) {
    console.error("Error fetching events:", error); // Log the full error
    res.status(500).json({ error: "Internal Server Error" }); // Return JSON error
  }
});

// Fallback route for "/"
app.get("/", (req, res) => {
  res.send("Welcome to the server!"); // Simple response
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
