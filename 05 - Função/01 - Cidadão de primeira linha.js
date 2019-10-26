// Os parametros e retornos são opcionais
// Caso a função não tenha return, ela retorna undefined

// Criando uma função de forma literal:
function fun1() {}

// Criando uma função anônima:
const fun2 = function () {console.log('Ai dento')}

// Armazenando em um array:
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,5))
console.log(array)

// Armazenando num atributo de objeto:
const obj = {}
obj.falar = function () {return 'Carai de asa'}
console.log(obj.falar())

// Passar função como parametro para outra função:
function run(fun) {
	fun()
}
run(fun2)

// Uma função pode retornar/conter uma função:
function soma(a,b) {
	return function (c) {
		console.log(a+b+c)
	}
}
soma(2,3)(4) // O resultado de soma é uma função
//ou:
const valor = soma(2,3)
valor(4)