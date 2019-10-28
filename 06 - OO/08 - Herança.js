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


// PART 04:


function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Luis'
obj3.falar()

// Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


// PART 05


// typeOf(String) = Function
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
// typeOf(Array) = Function
Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,4,5,4].first())
console.log('carai de asa'.reverse())


// PART 06


function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve!', 456)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'Oi cu', 342)
const aula4 = novo(Aula, 'Ai dento', 453)

console.log(aula1)
console.log(aula2)
console.log(aula3)
console.log(aula4)