class Carro {
    marca;
    modelo;
    ano;

    ligar() {
        console.log("O carro está ligado!");
    }
}

//Criando objeto(instância)

var carro1 = new Carro()
var carro2 = new Carro()
var carro3 = new Carro()

carro1.marca = "Porshe"
carro1.modelo = "911"
carro1.ano = 2023

carro2.marca = "Tesla"
carro2.modelo = "Model x "
carro2.ano = 2024

carro3.marca = "Lamborghini"
carro3.modelo = "Urus"
carro3.ano = 2025 

console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)

console.log(carro2.marca)
console.log(carro2.modelo)
console.log(carro2.ano)


console.log(carro3.marca)
console.log(carro3.modelo)
console.log(carro3.ano)


