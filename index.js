const dnd = require('./api');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ response: true, data: dnd})
})

app.get('/:race', (req, res) => {
    const { race } = req.params
    const selectedRace = dnd.races.filter(element => element.race === race)
    if(selectedRace) {
        res.status(200).json({response: true, data: selectedRace})
    } else {
        res.status(200).json({response: false, error: 'That race not exists'})
    }
})

app.listen(PORT, () => {
    console.log(`Server listenig on Port ${PORT}`)
})