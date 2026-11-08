const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

let usuarios = [
    {
        id: 1,
        username: "luiza",
        seguidores: 100,
        seguindo: 50
    },
    {
        id: 2,
        username: "pedro",
        seguidores: 80,
        seguindo: 55
    },
    {
        id: 3,
        username: "Ana",
        seguidores: 200,
        seguindo: 80
    },
    {
        id: 4,
        username: "luiz",
        seguidores: 50,
        seguindo: 70
    },
    {
        id: 5,
        username: "Carla",
        seguidores: 300,
        seguindo: 50
    }
]

function salvar() {
    const jsonData = JSON.stringify(usuarios, null, 2);

    fs.writeFile("usuarios.json", jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao salvar', err);
        } else {
            console.log('salvo com sucesso');
        }
    });
}

function ler() {
    dados = fs.readFileSync('usuarios.json')
    usuarios = JSON.parse(dados)
    console.log('lista carregada com sucesso');
}

app.get("/usuarios", (req, res) => {
    ler()
    const resposta = listarUsuarios.all()
    res.json(resposta)
})

app.get("/usuarios/:id", (requerimento, resposta) => {
    ler()
    let encontrado = usuarios.find((usuario) => requerimento.params.id == usuario.id)
    resposta.json(encontrado)
})

app.post("/usuarios", (req, res) => {
    if (req.body.username && req.body.seguidores && req.body.seguindo) {
        let novousuario = {
            id: Date.now(),
            username: req.body.username,
            seguidores: req.body.seguidores,
            seguindo: req.body.seguindo
        }
        usuarios.push(novousuario)
        salvar()
        res.json(novousuario)
    } else {
        res.send("Erro")
    }
})

app.patch("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        let novosdados = {}
        if (req.body.username) novosdados.username = req.body.username
        if (req.body.seguidores) novosdados.seguidores = req.body.seguidores
        if (req.body.seguindo) novosdados.seguindo = req.body.seguindo
        Object.assign(encontrado, novosdados)
    }
    salvar()
    res.json(encontrado)
})

app.delete("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        usuarios = usuarios.filter((usuario) => usuario.id != req.params.id)
        salvar()
        res.send("DELETADO")
    } else {
        res.send("Não encontrei o usuário")
    }
})

app.listen(3001, () => {
    console.log("Servidor iniciado em http://localhost:3001");
})