const mongoose = require('mongoose')

/* Criando a "Tabela" / Schema no banco de dados */

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },

    password: {
        type: String,
        require: true,
        min: 3
    },
}, { timestamps: true })

/* Autoriza a exportação da funcionalidade das rotas para o users.js - 
onde esta sendo requisitado o modelo - class */
module.exports = mongoose.model("User", UserSchema)