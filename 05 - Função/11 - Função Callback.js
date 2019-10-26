const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`)
}

// forEach = para cada elemento do array, faz tal coisa
// o forEach é um loop implicito

// Para cada elemento do array, a função é chamada
// Por isso o nome é callback
fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))

// A funções callback são muito utilizadas para requisições Ajax
// Caso a requisição der certo, será executada um callback de sucesso
// Caso contrário, será executado um callback de erro