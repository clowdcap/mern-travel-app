const mongoose = require('mongoose')

/* Criando a "Tabela" / Schema no banco de dados */

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },

    title: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },

    desc: {
        type: String,
        require: true,
        min: 3
    },

    rating: {
        type: String,
        require: true,
        min: 0,
        max: 5,
    },

    lat: {
        type: Number,
        require: true,
    },

    long: {
        type: Number,
        require: true,
    },

}, { timestamps: true })


/* Autoriza a exportação da funcionalidade das rotas para o pins.js - 
onde esta sendo requisitado o modelo - class */
module.exports = mongoose.model("Pin", PinSchema)