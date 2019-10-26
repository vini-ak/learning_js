const valor = 'Global'

function minhaFuncao() {
	console.log(valor) // 'Global'
}

function exec() {
	const valor = 'Local'
	minhaFuncao() // retorna 'Global'
	// A função procura no escopo onde ela foi definida
}

function aleatoria() {
	const valor = 'Local'
	console.log(valor) // 'Local'
}