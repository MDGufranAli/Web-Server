const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for the frontend

app.get('/api', (req, res) => {
  // Sending a message as a JSON object
  res.json({ message: 'Hello from the backend!' });
});

app.get('/', (req, res) => {
  // Sending a message as a JSON object
  res.send("gufran gandu");
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
