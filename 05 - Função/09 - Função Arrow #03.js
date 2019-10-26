// objeto global no node = global
// objeto global no browser = window

let comparaComThis = function (parametro) {
	console.log(this === parametro)
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj) // false
comparaComThis(global) // true
comparaComThis(obj) // false



// A função arrow está associada apenas ao módulo
// Cada arquivo é um módulo
// module.exports === this, no caso

let comparaComThisArrow = parametro => console.log(this === parametro)
comparaComThisArrow(global) // Não é global, só funciona no módulo
comparaComThisArrow(module.exports) // true

// O this numa função arrow não varia.
// O this está associado ao contexto local onde a função foi definida