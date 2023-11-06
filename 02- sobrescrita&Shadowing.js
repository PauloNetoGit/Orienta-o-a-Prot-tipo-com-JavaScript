const pessoa ={
    idade: 18
}

const paulo = {
    nome: "Paulo",
    // ele sobrescreve o objeto, já que ele achou o atributo aqui, então ele não procura em outro lugar(__proto__).
    idade: 40,
    __proto__: pessoa
}

console.log(paulo.idade);