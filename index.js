const express = require('express')
const app = express ()


app.get('/exibir',(req,res) => {
    res.send('Bem-vindo ao servidor Express!')

})

app.get('/sobre' , (req,res) => {
    res.send('Este é um projeto de exemplo com rotas.')

})

app.get('/contato' , (req,res) => {
    res.send('Entre em contato pelo e-mail: iferreiramariano@gmail.com')

})

app.listen(3000,() => {
    console.log('Servidor rodando em http://localhost:3000')

})