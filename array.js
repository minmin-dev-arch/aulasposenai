let frutas = [ 'Maçã','Uva' , 'Laranja']

console.log(frutas[0])
frutas.push('Abacate')

console.log(frutas)

//Remove último item 
frutas.pop()
console.log(frutas);

//Tamanho do array
let numeros = [10,20,30,40]
console.log(numeros.length); // 4

//Filtra com base em condição 
let nomes = ['Ana' , 'Beatriz' , 'João' , 'Carlos']
let nomeFiltrado = nomes.filter(nome => nome == "Joaõ" )
console.log(nomeFiltrado);

let cores = ['azul' , 'vermelho' , 'verde'];
cores.forEach(cor => {
    console.log('Cor: ' , cor );

})