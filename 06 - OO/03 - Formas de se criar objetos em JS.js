// 1 - usando notação literal
const obk1 = {}
console.log(obk1)

// 2 - objeto em JS
const obk2 = new Object
console.log(obk2)

// 3 - função construtora
function Produto(nome, preco, desconto) {
	this.nome = nome // atributo público
	this.getPrecoComDesconto = () => {
		return preco * (1-desconto)
	}
}

const caneta = new Produto('Caneta', 1.00, 0.15)
const caderno = new Produto('Caderno', 5.99, 0.20)
console.log(caneta.getPrecoComDesconto(), caderno.getPrecoComDesconto())


// 4 - função factory => padrão de projeto, função q fabrica objetos
function criarFuncionario(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase/30) * (30 - faltas)
		}
	}
}

const joao = criarFuncionario('Joao', 1000, 2)
const pedro = criarFuncionario('Pedro', 2500, 4)
console.log(joao.getSalario(), pedro.getSalario())

// 5 - Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Json.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)