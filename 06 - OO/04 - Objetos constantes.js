// pessoa aponta para um enderço de memoria
const pessoa = { nome : 'Joao' }
pessoa.nome = 'Pedro'
// A referência nao pode ser alterada, mas os atributos sim

// Para "congelar" o objeto e não poder alterar ou add atributos:
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa) // nada mudou...