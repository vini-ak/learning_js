// Fugir do escopo global do Browser

// IIFE -> Immediately Invoked Function Expression
// Padrão muito usado para fugir do escopo global.

// Função anônima delimitadas por parenteses

(function () {
	console.log('Será executado na hora!')
	console.log('Foge do escopo mais abrangente!')
})()