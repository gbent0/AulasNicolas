const express = require('express');
const app = express();
const port = 8080;
const mysql = require("mysql2")
const cors = require("cors")


app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    // mysql workbench
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'aula_add',
    port: 3307
})

if (connection){
    console.log("Banco de dados conectado")
}


app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/test', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/usuarios', (req, res) => {
    connection.query("SELECT * FROM usuario", (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: "Erro ao buscar usuários" })
        }
        res.status(200).json(results)
    })
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params
    connection.query("select * from usuario where id = ?", 
        [id], 
        (err, results) => {
            if(err){
                return
            }
            return res.status(200).send(results[0])

    })
})

app.post('/registro', (req, res) => {
    const { nome, email, senha } = req.body
    connection.query("INSERT INTO usuario (nome, email, senha) VALUES(?,?,?)",
        [nome, email, senha]
    )

    res.status(201).send({response: "Usuário registrado com sucesso!"})
})

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params
    try{
        connection.query("DELETE FROM usuario WHERE id = ?", [id])
        return res.status(200).send({ message: "Usuário deletado com sucesso!"})
    }
    catch(e){
        return res.status(500).send({error: e})
    }
})

app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params
    const { nome, email, senha } = req.body
    try {  
        connection.query("UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?",
            [nome, email, senha, id]
        )
        return res.status(200).send({ message: "Usuário atualizado com sucesso!" })
    }
    catch{
        return res.status(500).send({ error: "Ocorreu um erro ao atualizar." })
    }
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})