/* Importando blibiotecas e frameworks */
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

/* Instanciando as aplicações */
dotenv.config()
const app = express()
app.use(express.json())

/* Criando conecção com banco de dados mongo db */
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("MongoDB::: Log Database::: Conectado!")
    }
)

/* Definindo rotas da API */
app.use('/api/pins', pinRoute)
app.use('/api/users', userRoute)

/* Ligando servidor Node Js */
const PORT = 8000
app.listen(PORT, ()=> {
    console.log("Node JS::: Log Servidor::: Conectado!")
})
