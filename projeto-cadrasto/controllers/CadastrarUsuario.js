function usuario(nome, idade) {
    if(!nome || !idade) {
        console.log("Erro:Nome ou idade inválidos.")
    } else { 
    console.log("Nome: " + nome  );
    console.log("Idade: " + idade);
    console.log("Usuário cadastrado com sucesso!");
    }
}

module.exports = usuario