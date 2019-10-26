// Por que colocar let na variavel do laço?
// Porque se não é colocado, pode-se ter acesso a esta variável ao fim do laço

let contador = 1
while (contador <= 10) {
	console.log(`contador: ${contador}`)
	contador++
}

console.log(); // Printando um espaço vazio

for (let i = 1; i<=10; i++){
	console.log(`i = ${i}`)
}

console.log(); // Espaço vazio

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// O comprimento de um array é dado por Array.length

for (let i = 0; i < notas.length; i++) {
	console.log(`nota = ${notas[i]}`)
}