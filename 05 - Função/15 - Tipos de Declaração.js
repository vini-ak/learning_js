console.log(soma(3,4)) // 7
// O interpretador do JS carrega primeiro as funções declaradas
// só funciona com as function declaration

console.log(sub(3,4)) // erro!

// function declaration
function soma(x, y) {
	return x + y
}

// function expression -> passa uma função anônima para uma variavel
const sub = function (x, y) {
	return x -y
}

// named function expression -> pouco utilizada
const mult = function mult(x, y) {
	return x * y
}