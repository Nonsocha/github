// server.js (or app.js)
const express = require('express');
const app = express();

// Add this root route handler
app.get('/', (req, res) => {
  res.send('Hello from Express server!'); // Make sure to include this
});

module.exports = app; // Important for testing