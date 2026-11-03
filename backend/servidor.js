const express = require('express')
const app = express()

app.use(express.json())


app.get("/paginainicial", (req, res) => {
    res.send(`
    <p>teste?</p>
    `)
})





app.listen(3001, () => {
    console.log("Servidor iniciado em http://localhost:3001");
})