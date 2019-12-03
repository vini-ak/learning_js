// Formas de percorrer um array : forEach, map, filter, reduce
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


// ForEach é um laço for simplificado para um array
const exibirAprovados = (nome, indice) => console.log(`${indice + 1}) ${nome}`)
aprovados.forEach(exibirAprovados)

aprovados.forEach(nome => console.log(nome))

// O primeiro atributo é o dado e depois o index
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})