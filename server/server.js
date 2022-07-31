const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

app.use(express.static('server/public'));

let numberOfRequests = 0;

app.listen(port, () => {
    console.log('Listening on port', port);
});