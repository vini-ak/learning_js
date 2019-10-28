// A sintaxe de objeto em JS é muito parecida com o dicionário do Python

const pessoa = {
    nome : 'Vini',
    idade : 2,
    peso : 50
}

console.log(Object.keys(pessoa))    // Retorna as chaves do objeto
console.log(Object.values(pessoa))  // Retotna os valores ds chaves
console.log(Object.entries(pessoa)) // Retorna os arrays [chave, valor] para cada par

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

// Define características de uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // Define se a propriedade pode ser listada
    writable: false,    // Define se o atributo pode ser alterado. Congela o valor
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(Object.keys(pessoa))


//  Object.assign -> concatenação de atributos
const dest = { a: 1}
const o1 = { b : 2}
const o2 = { c : 3, a : 4}

// Passando os atributos para dest
const obj = Object.assign(dest, o1, o2)

Object.freeze(dest)
dest.c = 522456
console.log(dest)