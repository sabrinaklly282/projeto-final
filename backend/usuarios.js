const express = require('express')
const app = express()
const fs = require('fs')

function ler() {
    dados = fs.readFileSync('usuarios.json')
    usuarios = JSON.parse(dados)
}

const dadosUsers = ler()

app.get("/users", (req, res) => {
    res.json(dadosUsers)
})


app.listen(3001, () => {
    console.log("Servidor iniciado em http://localhost:3001");
})