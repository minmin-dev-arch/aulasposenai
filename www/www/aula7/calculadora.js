class Calculadora {
    valor1;
    valor2;

    somar(valor1,valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 + this.valor2;
        console.log("Resultado da soma: " + resultado)
    }
    multiplicar(valor1,valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 * this.valor2;
        console.log("O resultado  da  multiplicação é: " + resultado);
    } 
    dividir(valor1,valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 / this.valor2;
        console.log("O resultado  da  divisão é: " + resultado);
    
    }
} 

// Criando o objeto 
var calc = new Calculadora();

// Chamando o método da soma 
calc.somar(7,3); // Resultado da soma:10 

var calc2 = new Calculadora();

calc2.multiplicar(5,9);

var calc3 = new Calculadora();

calc3.dividir(10,2);

