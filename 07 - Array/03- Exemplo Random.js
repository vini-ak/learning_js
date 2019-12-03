// Criando um pseudoarray...
// Lembrando que um Array é um objeto!
const quaseArray = {0 : 'Rafael', 1 : 'Ana', 2 : 'Bia'}

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable : false
})

console.log(quaseArray[0])
console.log(quaseArray.toString())