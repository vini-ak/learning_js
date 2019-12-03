// Reduce pega o elemento e o seu anterior e realiza operacoes
const array = [1,3,2,6,7]
const resultado = array.reduce((anterior, atual) => anterior + atual)
console.log(resultado)