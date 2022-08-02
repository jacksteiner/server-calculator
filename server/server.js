const express = require('express');

const app = express();
const PORT = process.env.PORT || 5002;




const mathhistory = [
    {

    }
];

app.use(express.urlencoded());

app.use(express.static('server/public'));

app.get('/mathhistory', (req, res) => {
    res.send(mathhistory);
})



app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});