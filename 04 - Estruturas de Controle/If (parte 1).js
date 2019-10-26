function soBoaNotícia(nota) {
	if (nota >= 7) {
		console.log('Aprovado!! Nota: ',nota)
	}
}

const seForVerdadeEuFalo = valor => {
	// o valor é traduzido pela linguagem como um boolean.

	/* VALORES QUE RETORNAM FALSE:
	 * 0
	 * null
	 * NaN
	 * undefined 
	 * '' string vazia
	 */
	 
	if(valor) {console.log('Bucetaaa', valor)}
}



n = prompt('Nota: ')

soBoaNotícia(n)
seForVerdadeEuFalo(1)