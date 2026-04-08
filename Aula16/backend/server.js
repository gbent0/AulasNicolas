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
    password: '',
    host: 'localhost',
    database: 'aula_add',
    port: 3307
})

console.log(connection)

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})