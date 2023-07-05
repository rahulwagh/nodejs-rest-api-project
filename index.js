const express = require('express')
const app = express()

const port = process.env.PORT || 9004;

app.get('/hello', (req, res) => res.send('Hello World from Node JS Application'))

app.listen(port, (err) => {
    if (err) {
        console.log('Error::', err);
    }
    console.log(`Node JS App listening on ${port}`);
});