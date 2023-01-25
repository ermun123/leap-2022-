const express = require('express');

const app = express();

const port = 8000;

app.get('/', (request, response) => {
    response.status(200);
    response.json('Hello World');
});

app.listen(port, () => {
    console.log('http://localhost:' + port)
});

app.get('/a', (request, response) => {
    response.json(100)
});