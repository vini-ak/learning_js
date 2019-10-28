/* métodos que leiam e alterem estes atributos*/

// JAVASCRIPT NÃO TEM ATRIBUTOS PRIVADOS!!!

const sequencia = {
    _valor: 1, // É apenas uma convenção!!! Não quer dizer nada
    get valor() { return this._valor++ }, // Retorna o valor
    set valor(valor) {  // Altera o valor. Usado para fazer validação
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor)    // chama o método get -> retorna 1, e add 1
console.log(sequencia.valor)    // chama o método get -> retorna 2, e add 1

sequencia.valor = 1000      // chama o método set -> altera o valor para 1000
console.log(sequencia.valor, sequencia.valor, sequencia.valor)  // chama os gets -> 1000 1001 1002

sequencia.valor = 900       // chama o método set -> mas não altera o valor por conta da validação.
console.log(sequencia.valor)    // chama o método get -> retorna 1003