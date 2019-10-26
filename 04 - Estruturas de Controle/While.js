// while é utilizado quando não se sabe o número de elemntos
// for é mais usado quando se tem um número definido de elementos

function getInteiroAleatorio(min,max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
	opcao = getInteiroAleatorio(-1,10)
	console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Até a próxima')