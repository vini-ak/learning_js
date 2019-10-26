// classe é uma forma diferente de fazer uma função em JS

class Pessoa {
	constructor(nome) {
		this.nome = nome
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('Vinicius')
p1.falar()

// ================================================== //

const criarPessoa = nome => {
	return {
		falar: () => console.log(`Meu nome é ${nome}`)
	}
}

const p2 = criarPessoa('Maria')
p2.falar()