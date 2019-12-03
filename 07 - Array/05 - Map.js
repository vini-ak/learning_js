// map faz a transformação dos elementos de um array
// o map GERA um novo array transformado.
const nums = [1,2,3,4,5]

let result = nums.map(e => e * 2)   // Multiplicando o valor de cada elemento por 2.
console.log(result)

const soma10 = nums.map(e => e + 10)
console.log(soma10)

const quadrado = nums.map(e => e * e)
console.log(quadrado)

const money = nums.map(e => `R$ ${parseFloat((e+10)*4).toFixed(2)}`)
console.log(money)



// Exercício:

const carrinho = [
    '{ "nome" : "Borracha", "preco": 3.45}',
    '{ "nome" : "Caderno", "preco": 13.90}',
    '{ "nome" : "Kit de Lapis", "preco": 41.22}',
    '{ "nome" : "Caneta", "preco": 7.50}'
]

const convertIntoObject = carrinho.map(e => JSON.parse(e))
const precos = []
convertIntoObject.forEach(e => precos.push(e['preco']))
const retorno = precos.map(e => `R$ ${parseFloat(e).toFixed(2)}`)
console.log(retorno)