const { log } = require('console');
const loop = require('events')
const express = require('express');
const app = express();
const port = 3000;

// app.use('/', express.static('views'));

const data = {
    "Jhon Wick" : "+8756342321",
    "Mike Wasovsiy" : "+79783"
}

let em = new loop();
em.on('First event', (data) => {
    let [name] = Object.keys(data)
        console.log("First subscriber:", name)
    
})

app.get('/', (req, res) => {
    res.json(data);
})



em.emit('First event', data);

app.listen(port, () => console.log(`Server runs: http://localhost:${port}`));