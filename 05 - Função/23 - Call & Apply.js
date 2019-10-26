function getPreco(imposto = 0, moeda = 'R$') {
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
	nome: 'Notebook',
	preco: 4589,
	desc: 0.15,
	getPreco
}

console.log(produto.getPreco())

// =============================================================== //

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro, 0.17, '$')) // passando o imposto e a moeda

// =============================================================== //

const geladeira = { preco: 2000, desc: 0.30 }
console.log(getPreco.apply(geladeira, [0.20, '$']))

// =============================================================== //

// A diferença do call e do apply é a forma como se passa os parametros:
// no call, os parametros são passados diretamente junto com o objeto.
// no apply, os parametros são passados em um array