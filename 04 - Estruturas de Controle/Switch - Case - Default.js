// O switch é ideal para seleções múltiplas

/* Sempre colocar break em cada case
   caso contrário ele repetirá todos os cases que estiverem abaixo */


const imprimirResultado = function(nota) {
	switch (Math.floor(nota)) {
		case 10:
		case 9:
			// O codigo entra nesta linha se o case é 10 ou 9
			console.log('Quadro de honra.')
			break // sem o break, o codigo vai testar até o ultimo case
		case 8: case 7:
			console.log('Aprovado')
			break
		case 6: case 5: case 4:
			console.log('Recuperação')
			break
		case 3: case 2: case 1: case 0:
			console.log('Reprovado.')
			break
		default:
			// É como se fosse o else do switch (também é opcional)
			console.log('Nota inválida')
	}
}