/*
===========================================
📘 Exercícios de Funções em JavaScript
💡 Nível: Iniciante
🎯 Objetivo:
Praticar a criação e o uso de funções em JavaScript,
utilizando a palavra-chave 'function' e a declaração de variáveis com 'var'.

🚀 Bons estudos!

1 - Converter Celsius para Fahrenheit
Crie uma função converterParaFahrenheit que receba a temperatura em Celsius e retorne o valor em Fahrenheit usando a fórmula:
F = (C × 1.8) + 32


2- Calcular média de 3 notas
Crie uma função mediaNotas que receba três números e retorne a média.

3 - Quadrado de um número
Crie uma função quadrado que receba um número e retorne o número ao quadrado.

4 - Converter minutos em segundos
Crie uma função minutosParaSegundos que receba um número de minutos e retorne quantos segundos tem.
segundos = minutos * 60

5 - Converter horas em minutos
Crie uma função horasParaMinutos que receba um número de horas e retorne o total em minutos.
minutos = horas * 60

6 - Verificar se dois nomes são iguais
Crie uma função nomesIguais que receba dois nomes e exiba "Iguais" se forem iguais, e "Diferentes" caso contrário.


===========================================
*/

//1 

function converterParaFahrenheit(celsius) {
    var F = (celsius * 1.8) + 32
    return F;
}

var temperatura = converterParaFahrenheit(35);
console.log(" O valor da temperatura é: " + temperatura + "°F" );

//2

function mediaNotas(a,b,c) {
    var media = (a + b + c )/ 3 
    return media;
}
 
var nota = mediaNotas(5,4,6);
console.log("A média do aluno é de: " + nota);

//3 

function quadrado(numero) {
    var resultado = numero * numero ;
    return resultado;
}

var valor = quadrado(8);
console.log("O quadrado de 8 é: " + valor);

//4

function minutosParaSegundos(minutos) {
    var segundos = minutos * 60
    return segundos
}

var segundos = minutosParaSegundos(7);
console.log("O minuto convertido em segundos fica:" + segundos + "s");

//5 

function horasParaMinutos(horas) {
    var minutos = horas * 60
    return minutos 
}

var minutos = horasParaMinutos(3);
console.log("A quantidade de minutos em 3 horas é: " + minutos + "min.");


//6

function verificarNomes(nome1,nome2) {
    if(nome1 == nome2) {
        console.log("Iguais")
    } else 
        console.log("Diferentes")
    
 }


 verificarNomes("Maria","Maria")
 verificarNomes("João","José")
 verificarNomes("Hugo","Hugo")