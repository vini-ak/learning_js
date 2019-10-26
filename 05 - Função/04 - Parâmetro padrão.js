// Estratégias para gerar um valor padrão

/********************************************************/

// Primeira forma:

function soma1(a,b,c) {
	a = a || 1
	b = b || 1
	c = c || 1
	return a + b + c
}

console.log(`${soma1()}/n${soma1(3)}/n${soma1(1,2,3)}/n${soma1(0,0,0)}`)
// O último caso retorna 3, pois 0 é lido como falso

/********************************************************/

// Segunda, terceira e quarta formas: 

function soma2(a,b,c) {
	a = a !== undefined ? a : 1
	b = 1 in arguments ? b : 1 // Verifica se arguments tem um índice 1
	c = isNaN(c) ? 1 : c // Forma mais segura!
}

console.log(`${soma2()}/n${soma2(3)}/n${soma2(1,2,3)}/n${soma2(0,0,0)}`)
// O último caso retorna 0

/********************************************************/

// Quinta forma: parâmetro padrão ES2015

function soma3(a = 1,b = 1,c = 1) {
	return a + b + c
}
console.log(`${soma3()}/n${soma3(3)}/n${soma3(1,2,3)}/n${soma3(0,0,0)}`)

