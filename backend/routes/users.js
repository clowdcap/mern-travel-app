const router = require('express').Router()
const User = require('./../models/User')


router.post('/register', async (req, res) => {
    try {
        /* Deixa a senha criptografada 

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        */

        /* Pega a classe User e coloca os dados pelo postman  */
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        /* Salvando os dados dentro do collections do banco de dados */
        const user = await newUser.save()
        res.status(200).json("Usuario criado com sucesso")
    
    } catch (error) {
        res.status(500).json()
        console.log(error)
    }
})

// Pegar todos os usuarios registrados no banco de dados
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json()
        console.log(error)
    }
})

/* Pega os dados dos registro de usuario e faz a conferencia se existe
sistema de login */
router.post('/login', async (req, res) => {
    try {
        // Procura usuario
        const user = await User.findOne({ username:req.body.username })
        !user && res.status(400).json("Usuario errado, tente novamente")

        // Valida a senha
        const password = await User.findOne({ password:req.body.password })
        !password && res.status(400).json("Senha errada, tente novamente")

        // Valida a senha criptografada
        /*
        const valid_password = await bcrypt.compare(
            req.body.password, 
            user.password
        )
        !user && res.status(400).json("Wrong username, try again")
        */

        // Retorna o resultado
        try {
            if(user && password) {
                res.status(200).json("Login realizado com sucesso")
            }
        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        console.log(error)
    }
})

/* Autoriza a exportação da funcionalidade das rotas para o index.js - 
onde esta sendo requisitado  */
module.exports = router