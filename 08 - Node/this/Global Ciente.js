require('./Global') // Não é preciso chamar uma variável, pois Global.js não está exportando (retornando) nada

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // é permitido mudar o nome... o que é um problema. A solução é congelar o objeto de Global.js que está sendo acessado
console.log(MinhaApp.nome)

console.log(Ai.oi())
Ai.nome = 'Mofio'   // Objeto congelado. Não é permitido alterar o nome.

console.log(Ai.nome)