const obj = { a : 1, b : 2, c : 3, soma() {
    return a + b + c
}}

console.log(JSON.stringify(obj))    // Convertendo um objeto para um arquivo JSON
console.log(JSON.parse('{ "a" : 1, "b" : 2, "c": 3}'))   // Convertendo um JSON para objeto
// obs: as chaves e valores do JSON precisam estar em aspas duplas.

