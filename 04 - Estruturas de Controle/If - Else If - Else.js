// if - else - elif

function imprimirResultado(nota){
	if(9 <= nota && nota <= 10) {
		console.log("A!! Perfect.")
	} else if(8 <= nota && nota < 9) {
		console.log("B! Great.")
	} else if(7 <= nota && nota < 8) {
		console.log("C+")
	} else if(6 <= nota && nota < 7) {
		console.log("C-")
	} else if(5 <= nota && nota< 6) {
		console.log("D. Take care...")
	} else if(0 <= nota && nota < 5) {
		console.log("F. Reprovado.")
	} else {
		// Este else é opcional.
		console.log("Invalid average, try again!")
		novaTentativa = prompt()
		return imprimirResultado(novaTentativa)
	}
}

imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(1)
imprimirResultado(5)
imprimirResultado(11)