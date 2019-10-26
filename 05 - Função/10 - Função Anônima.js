// funções anônimas são funções sem nomes

// Função anônima:
const soma = function (x,y) {
	return x + y
}

// Função anônima que imprime o resultado:
const imprimirResultado = function (a,b, operacao = soma) {
	// a operação tem valor default soma
	console.log(operacao(a,b))
}
imprimirResultado(3,4)

// Passando uma função anonima dentro de outra função
imprimirResultado(3,4, function (x,y) {
	return x - y
})
imprimirResultado(3,4,(x,y) => x * y)

// Passando uma função anônima num contexto de objeto
const pessoa = {
	falar: function () {
		console.log('sou safadinho safado cachorro e safadao')
	}
}
pessoa.falar()