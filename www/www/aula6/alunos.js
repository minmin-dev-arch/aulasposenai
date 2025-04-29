class Aluno {
    nome;
    idade;
    curso;

    exibirInfo(nome,idade,curso) {
        this.nome = nome 
        this.idade = idade 
        this.curso = curso 
    console.log("Olá,eu sou a  " + this.nome)
    console.log("Tenho  " + this.idade)
    console.log("Faço curso de " + this.curso)
    }
}

var aluno1 = new Aluno()
var aluno2 = new Aluno()


aluno1.exibirInfo("Iasmin ", "17 ", "Programação")
aluno2.exibirInfo("Maria Carolina" , " 17 ", "Administração")
