const express = require('express');

const app = express();
const PORT = process.env.PORT || 5002;




const mathhistory = []

app.use(express.urlencoded());

app.use(express.static('server/public'));

app.get('/mathhistory', (req, res) => {
    res.send(mathhistory);
})

app.post('/mathhistory', (req, res) => {
    // res.send(mathhistory);
    let mathproblem = req.body;
    console.log(mathproblem);
    if (req.body.modifier === '-' ){
        mathproblem.answer = req.body.inputone - req.body.inputtwo
    } else if (req.body.modifier === '+') {
        mathproblem.answer = Number(req.body.inputone) + Number(req.body.inputtwo)
    } else if (req.body.modifier === '*') {
        mathproblem.answer = req.body.inputone * req.body.inputtwo
    } else if (req.body.modifier === '/') {
        mathproblem.answer = req.body.inputone / req.body.inputtwo
    } else {
        console.error('operator not found');
    }

    mathhistory.push(mathproblem);
    res.send(mathproblem);
})


app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});