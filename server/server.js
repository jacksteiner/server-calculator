const express = require('express');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.urlencoded());

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});