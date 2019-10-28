//  PART 01


// Em JS, você só pode ter um pai na herança

// Protótipos -> uma referência para um objeto
// Se procurar um atributo ou método no objeto original e não for encontrado,
// o JS vai buscar este mesmo atributo ou método no protótipo deste objeto.

const ferrari = {
    modelo : 'F40',
    velMax : 324
}

const volvo = {
    modelo : 'V40',
    velMax : 200,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

console.log(ferrari.__proto__)  // representa o Object.protype, se não houver herança
// O Object.prototype é o protótipo de mais alto nível


// PART 02:


// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'    // Evitar esse tipo de manipulação
const avo = { attr1 : 'A'}  // O protótipo se refere à Object.prototype
const pai = { __proto__: avo, attr2 : 'B' }
const filho = { __proto__ : pai, attr3 : 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual : 0,
    velMax: 200,
    acelerarMais(delta) {
        if ((this.velAtual + delta) <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

// Chamando o objeto ferrari definido lá em cima:
ferrari.__proto__ = carro   // Definindo carro como o protótipo de ferrari
ferrari.velAtual = 200      // Definindo a velocidade atual
ferrari.acelerarMais(100)   // Chamando o método do protótipo para fazer a ferrari acelerar 
console.log(ferrari.status())   // Chamando o método status do protótipo.

// Chamando o objeto volvo:
volvo.velAtual = 60
Object.setPrototypeOf(volvo, carro) // Definindo o protótipo de volvo
console.log(volvo.status()) // O volvo tem o status diferente do status do protótipo.


// PART 03:


const dad = {
    nome : 'Pedro',
    corCabelo : 'preto'
}

const filha1 = Object.create(dad) // Cria um objeto com o protótipo pai
filha1.nome = 'Ana'
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

const filha2 = Object.create(dad, {
    nome: {value : 'Bia', writable: false, enumerable: true}
})
filha2.nome = 'bela'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}.`)