// Se estiver desenvolvendo para o Frontend, está sendo executado no Browser
// Se estiver desenvolvendo para o Backend, está sendo executado pelo Node


// Linguagens C-Like: linguagens com sintaxe parecidas com o C


// Constantes e variáveis declaradas com o let não vão para o objeto Window nem para o this
// O window é o objeto global do browser

let pessoa = {nome: 'Vini', falar: function() {console.log(`Eu sou ${this.nome}`)}}
// O this se está referindo às características do objeto pessoa
// O objeto pessoa está no escopo global, mas seus atributos, não.

pessoa.falar()