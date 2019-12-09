const contadorA = require('./06 - Instância Única')
const contadorB = require('./06 - Instância Única')

const contadorC = require('./07 - Nova Instância')() // Os parenteses no final são para criar instâncias
const contadorD = require('./07 - Nova Instância')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)    // As alterações feitas em A, serão salvas em B

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)