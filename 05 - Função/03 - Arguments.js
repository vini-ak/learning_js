function soma() {
	let soma = 0
	for (let i in arguments) {
		if (isNaN(arguments[i]) === false) {
			soma += arguments[i]
		}
	}
	console.log(soma)
}

soma(8,4,5,2,1,9.8)