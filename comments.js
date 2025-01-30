// Create web server
const express = require('express');
const app = express();

// Create a route for GET request
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listen to port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});