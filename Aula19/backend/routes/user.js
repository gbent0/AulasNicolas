import express, { Router } from 'express'
import { getPeople, createUser } from '../controllers/UserController.js'

const router = express.Router();

router
    .get('/users', getPeople)
    // .post('/register')

export default router














// const Router = express.Router();
// const users = ["Giovanna", "Rodrigo", "Valeria", "Edson"]

// router
//     .get ('/users', (req, res) => {
//         res.send(users)
//     })
//     .post('/users', (req, res) => {
//         const { name, lastname } = req.body
//         try{
//             users.push({name, lastname})
//             return res.status(200).send({response: `Usuário ${name} ${lastname} registrado com sucesso.`})
//         }
//         catch{
//             return res.status(500).send({response: "Ocorreu algum erro"})
//         }
//     })

// export default router

