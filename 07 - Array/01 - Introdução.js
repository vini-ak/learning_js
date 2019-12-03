// Arrays em JavaScript começam com indíce 0.
primeiro_array = ['Vinicius', 'Ricardo', 'Jess', 'Evelyn']

// Adicionando um novo elemento à lista em posição aleatória (ou modificando)
primeiro_array[4] = 'Bianca'

// Adicionando na última posição:
primeiro_array.push('Vicente')

// Printando o index e o conteúdo de cada elemento...
for (let i in primeiro_array){
    console.log(i, primeiro_array[i])
}

// Imprimindo o lenght
console.log(`Comprimento do array: ${primeiro_array.length}`)

// Removendo um elemento
delete primeiro_array[1]
console.log(primeiro_array[1]) // Posição vazia. Preenchida com undefined.
console.log(primeiro_array)

// função splice -> array.splice(indice de onde ele começa a trabalhar, excluí os n itens depois desse índice, elementos a serem adicionados)
primeiro_array.splice(1,1,'Ai dento')
console.log(primeiro_array)

// Ordenando o array
primeiro_array.sort()
console.log(primeiro_array)