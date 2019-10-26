// Colecao dinamica
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'chair'
produto.preco = 89.99

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
	modelo: 'A4',
	valor: 890000,
	placa: 'ABD-8924'
	proprietario: {
		nome: "Raul",
		idade: 56,
		endereco: {
			cep: '54530050'
			numero: 9
		}
	}
}

carro.proprietario.endereco.numero = 89
carro.proprietario.endereco.cep = '65890320'
