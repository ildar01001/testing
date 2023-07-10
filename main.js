const express = require('express');
const app = express();

const port = 3000;
app.use('/', function (req, res) {
    res.send("Hello, Petux!")
})

app.listen(port, () => console.log(`Server runs: http://localhost:${port}`));