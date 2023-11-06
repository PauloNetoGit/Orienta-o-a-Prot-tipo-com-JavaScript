const pessoa = {
    genero: 'Masculino'
}

// Aqui ele cria uma instância do objeto pessoa e atribui a constante paulo
const paulo = Object.create(pessoa)

paulo.nome = "Paulo Neto"

// Aqui ele percorre o objeto pessoa e pega o atributo genero
console.log(paulo.genero);
// se eu chamar a constante paulo, ele exibe o nome sem o protótipo genero.
console.log(paulo);
// se eu estivesse usando o prototipo, ele seria chamado assim:
console.log(pessoa.__proto__);
