// Função factory -> função que retorna um objeto

const prod1 = {
	nome: '...',
	preco: 45
}

const prod2 = {
	nome: '...',
	preco: 45
}

// ...
// A factory vai criar os objetos

// Factory simples -> sem parametros

function criarPessoa() {
	return {
		nome: 'Ana',
		sobrenome: 'Silva'
	}
}

console.log(criarPessoa())