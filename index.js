const express = require ('express')

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Servidor Express funcionando!');
})

app.get('/sobre', (req,res) => {
    res.send('Bem-vindo á página Sobre!');
})

app.get('/usuario', (req,res) => {
    res.send('Iasmin');
})

app.post('/usuario', (req,res) => {
    const nome = req.body.nome
    const cargo = req.body.cargo
    res.send("Usuário "  + nome + " criado com sucesso" + "," +  "Com o cargo de: " + cargo);
})

const curso = ("Programador back-end")

app.get('/senai', (req,res) => {
    res.send( curso);
})


app.listen(3000,() => {
    console.log('Servidor rodando em http://localhost:3000')
})