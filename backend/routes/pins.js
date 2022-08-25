const router = require('express').Router()
const Pin = require('./../models/Pin')

// Criar um alfinete do mapa - Pin
router.post('/', async (req, res)=> {
    /* Pega a classe Pin e coloca os dados pelo postman */
    const newPin = new Pin(req.body)
    
    try {
        /* Salvando os dados dentro do collections do banco de dados */
        const savedPin = await newPin.save()
        res.status(200).json(savedPin)

    } catch (error) {
        res.status(500).json()
        console.log(error)
    }
})


// Pegar todos os alfinetes 'pins' registrados no banco de dados
router.get('/', async (req, res) => {
    try {
        const pins = await Pin.find()
        res.status(200).json(pins)
    } catch (error) {
        res.status(500).json()
        console.log(error)
    }
})

/* Autoriza a exportação da funcionalidade das rotas para o index.js - 
onde esta sendo requisitado  */
module.exports = router