// Orientacao A Prototipo e Funções Construtoras (Herança)
const pessoa = {
    genero: "masculino",
    cpf: 123,
    rg: 456
}

// quando eu digo "__proto__: pessoa" então o objeto "cliente" está herdando os atributos do objeto "pessoa".
const cliente = {
    nome: "Paulo",
    idade: 40,
    __proto__: pessoa
}

console.log(cliente.rg);

//------------------------------------------------------------------------
//------------------------FUNÇÃO CONSTRUTORA------------------------------
//------------------------------------------------------------------------

function Pessoal(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const paulo = new Pessoal('Paulo', 40 )

console.log(paulo);

// usando "prototype" para criar um método falar
Pessoal.prototype.falar = function () {
    console.log(`Meu nome é -- ${this.nome}`);
}

paulo.falar()

//------------------------------------------------------------------------
// usando "Class" no lugar de prototype
//------------------------------------------------------------------------
class Pessoal_02{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`Oi, Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const nome2 = new Pessoal_02("Paulo Neto", 40)
nome2.falar()
