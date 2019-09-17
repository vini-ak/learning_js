// O objeto Global funciona como o window no Browser
// Definindo uma variavel com var, ela faz parte do objeto global
// Definindo uma variável com let, ela não faz.


let a = 3 // a não pertence a global
console.log(a, 'não é igual a', global.a,'.')

global.b = 123 // definindo uma variável global
this.c = 456 // outra var global
module.exports.d = false
module.exports.e = 'ai dento'

console.log(global.b, 'e',global.c)

// Para o node, em vez de usar o this, é mais utlizado module.exports

console.log(module.exports)