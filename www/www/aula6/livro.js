class Livro {
    titulo;
    autor;

    exibirInfo(titulo,autor) {
    this.titulo = titulo 
    this.autor = autor 
    console.log("Esse livro possui titulo de: " + this.titulo)
    console.log("E autor " + this.autor)
    }
}

var livro1 = new Livro()
var livro2 = new Livro()
var livro3 = new Livro ()

livro1.exibirInfo("Dom Casmurro ", "Machado de Assis")
livro2.exibirInfo("Capitães de Areia " , " Jorge Amado")
livro3.exibirInfo("A hora da estrela " , "Clarice Lispector")
