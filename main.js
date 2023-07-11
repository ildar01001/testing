const express = require('express');
const app = express();


const port = 3000;

app.use('/', express.static('views'));

app.use('/contacts', function(req, res) {
    res.json({
        "Jhon Wick" : "+8756342321",
        "Mike Wasovsiy" : "+79783"
    })
})
app.listen(port, () => console.log(`Server runs: http://localhost:${port}`));