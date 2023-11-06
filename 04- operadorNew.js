function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
}

const paulo = new Pessoa("Paulo", 40)
paulo.falar()

console.log();

//-----------------------------------------------------------
//------------------PEGANDO O OBJ PELO CALL------------------
//-----------------------------------------------------------

const neto = {
    genero: 'Masculino'
}

Pessoa.call(neto, "Paulo Neto", 40)

console.log("--------- CHAMANDO O OBJETO PELO CALL ---------");
console.log(neto);

