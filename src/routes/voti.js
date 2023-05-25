const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('elenco voti')

    res.send('elenco voti')
})


router.get('/:id', (req, res) => {
    console.log(`singolo voto ${req.params.id}`)

    res.send(`singolo voto ${req.params.id}`)
})


router.delete('/:id', (req, res) => {
    console.log(`elimina singolo voto ${req.params.id}`)

    res.send(`elimina singolo voto ${req.params.id}`)
})


module.exports = router