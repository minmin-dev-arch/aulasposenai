const express = require ('express')
const app = express ()

app.use(express.json())



app.post('/comprar' , (req,res) => {
    const produto = req.body.produto
    const preco = req.body.preco
    const quantidade = req.body.quantidade
    const total = preco * quantidade 
    res.send("produto: " + produto + " e " + "valor total: " + total )

})


app.listen(3000, () => {

console.log('servidor rodando em http://localhost:3000')

})