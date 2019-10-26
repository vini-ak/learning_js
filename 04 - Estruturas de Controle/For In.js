/* O for in não é uma das alternativas mais interessantes
 * para se iterar sobre arrays. Para isso temos o
 * map, o filter, o foreach...
 */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
	console.log(i, notas[i])
}


/* Porém, quando estamos trabalhando com objetos, 
 * é uma alternativa interessante.
 */

 const pessoa = {
 	nome: 'Ana',
 	sobrenome: 'Silvia',
 	idade: 29,
 	peso: 64
 }

 for (let atributo in pessoa) {
 	console.log(`${atributo} = ${pessoa[atributo]}`)
 }

// Sempre usar o let para usar o iterador apenas no escopo local