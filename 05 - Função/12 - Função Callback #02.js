// Pegar todas as notas menores do que 7.0
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas1.push(notas[i])
	}
}
console.log('Primeiro teste: ' + notasBaixas1)

// =============================================== //

// Com callback

// A função filter faz a filtragem por true ou false
const notasBaixas2 = notas.filter(function(nota) {
	return nota < 7
}) 
console.log('Segundo teste: ' + notasBaixas2)
// A função filter não altera o array original

// =============================================== //

// Callback com arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log('Terceiro teste: ' + notasBaixas3)