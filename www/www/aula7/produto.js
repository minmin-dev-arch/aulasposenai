class Produto {
    nome;
    preco;
    quantidade;

    exibirDetalhes(nome,preco,quantidade) {
        this.nome = nome 
        this.preco = preco
        this.quantidade = quantidade
    console.log("Produto: " + this.nome)
    console.log("Preço: " + this.preco)
    console.log("Qtd:  " + this.quantidade)
    } 
    calcularTotal(preco,quantidade) {
        this.preco = preco
        this.quantidade = quantidade
       var resultado = this.preco * this.quantidade;
       console.log("O valor total é: " + resultado)
    }
}

var produto = new Produto();

produto.exibirDetalhes("Coca-cola ", "10,00$" , 90)

produto.calcularTotal(10,90)