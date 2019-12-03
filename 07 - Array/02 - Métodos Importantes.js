const pilotos = ['Vettel', 'Alonso', 'Hammilton', 'LeClerc']

pilotos.pop() // Remove o último ('LeClerc')
console.log(pilotos)

pilotos.push('Verstappen')  // Adiciona na última posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro ('Vettel')
console.log(pilotos)

pilotos.unshift('Schumacher') // Adiciona na primeira posição
console.log(pilotos)

pilotos.splice(2,0,'Bottas', 'Maldonado') // Adiciona Bottas e Maldonado antes de Hammilton
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Pega todos os pilotos a partir da posição 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Pega os pilotos de 1 a 4, não incluso
console.log(algunsPilotos2)