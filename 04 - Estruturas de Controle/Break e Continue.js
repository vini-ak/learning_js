// break e continue geram desvios de fluxo

const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums) {
	if (x == 5) break
	// O break para a execução do laço
	console.log(`${x} = ${nums[x]}`)
}

console.log()

for (let y in nums) {
	if (y == 5) continue
	// O continue para somente a execução corrente e passa para a proxima
	// O continue só funciona dentro de laços de repetição
	console.log(`${y} = ${nums[y]}`)
}

console.log()

// Criando um rótulo:
externo: for (let a in nums) {
	for (let b in nums) {
		if (a == 2 && b == 3) break externo
		// Caso a condicao seja verdadeira o laço externo será quebrado.
		// Se fosse utilizado apenas break dentro do laço interno, somente
		// a execução do laço interno seria quebrada, e o laço externo
		// passaria para a próxima iteração.
		console.log(`Par = ${a},${b}`)
	}
}