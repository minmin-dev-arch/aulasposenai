class Filme{
    titulo;
    genero;

    exibirInfo(titulo,genero) {
    this.titulo = titulo 
    this.genero = genero
    console.log("Esse filme possui titulo de: " + this.titulo)
    console.log("E gênero " + this.genero)
    }
}

var filme1 = new Filme()
var filme2 = new Filme()
var filme3 = new Filme()

filme1.exibirInfo("Harry Potter", "Fantasia")
filme2.exibirInfo("Jhon Carter " , " Aventura")
filme3.exibirInfo("A hora da estrela " , "Romance")
