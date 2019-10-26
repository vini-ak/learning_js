// Inversão lógica do while.
// Ela garante pelo menos uma repetição do laço while

// Primeiro ele executa, depois ele compara

function getInteiroAleatorio(minimo,maximo) {
	const valor = Math.random() * (maximo - minimo) + minimo
	return Math.floor(valor)
}

let opcao = -1

do {
	opcao = getInteiroAleatorio(-1,10)
	console.log(`Opcao escolhida: ${opcao}`)
} while (opcao != -1)