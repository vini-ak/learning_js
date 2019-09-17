/* try: Tentar. Caso dê errado, ele vai para a exceção.
 * catch: Pega a exceção e a trata de alguma forma de modo que o tire do erro.
 * throw: O que será retornado após o catch. 
 * finally: Será executado mesmo que ocorra algum erro.
 */

function tratarErro(erro){
	// Mensagem de erro que será apresentada:
	throw new Error ("Erro de processamento. Notificando nosso suporte...")

	// Para o throw, pode ser lançada qualquer coisa. Exemplos:
	// throw false
	// throw 10
	// throw 'mensagem'
	// Resumindo: Qualquer coisa é válida contanto que se trate o problema.
}

function imprimirNomeMaiusculo(obj) {
	try {
		console.log(obj.name.toUpperCase(),'!!!')
	} catch (e) {
		tratarErro(e)
	} finally {
		// O finally vai ser executado independente do erro.
		console.log('Qualquer coisa. Só para mostrar que funciona...')
	}
}


const obj = { nome : 'Vini' }
imprimirNomeMaiusculo(obj)