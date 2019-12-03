// Concat serve para unir dois arrays
// não mexe nos arrays originais, o concat gera um novo array

const filhas = ['Lucia', 'Silvia']
const filhos = ['Barto', 'Val']
const todos = filhas.concat(filhos)
console.log(todos)

console.log([].concat([1,2], [3,4], 5, [[6,7], 8])) // [ 1 , 2 , 3 , 4 , 5 , [ 6 , 7 ] , 8]