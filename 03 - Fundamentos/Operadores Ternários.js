/* Criando uma função arrow com
 * retorno implícito, de modo que
 * se o resultado for maior ou igual a 7,
 * será retornado 'Aprovado'.
 * Senão, será retornado 'Reprovado'
 */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/* Os operadores ternários trabalham com três partes:
 *
 * 1) Uma expressão que retorna true ou false: x>=7
 * 2) A expressão que será retornada caso seja true: 'Aprovado'
 * 3) E a que será retornada em caso false: 'Reprovado'
 *
 */

a = prompt()
console.log(resultado(a))


/* OBS: Em caso de se criar uma função arrow com 
 * retorno não implícito, o código se pareceria com:
 *
 const resultado = nota => {
 	return nota >= 7 ? 'Aprovado' : 'Reprovado'
 }
 */