// Object.preventExtensions(obj) -> proíbe a adição de novos atributos ao objeto
// É permitido mudar o valor dos atributos, mas não o conteúdo.
// É permitido excluir atributos.
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco : 1.99,
    tag : 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Salgadinho'
delete produto.tag
console.log(produto)


// Object.seal(obj) -> praticamente a mesma coisa do preventExtensios,
// a diferença é que o seal proíbe a exclusão de atributos.
const pessoa = { nome : 'Juliana', idade : 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze -> selado + valores constantes
// todos os atributos tem writable = false