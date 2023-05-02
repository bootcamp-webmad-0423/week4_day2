const express = require('express')

// express instance
const app = express()

// configs
app.use(express.static('public'))

// routing
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/galeria', (req, res) => {
    res.sendFile(`${__dirname}/views/popino-page.html`)
})

// server listening
app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN PUERTO 5005'))