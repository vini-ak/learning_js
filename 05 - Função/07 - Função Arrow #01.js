// Função anonima;
// dobro está sendo declarado com let para poder redefini-la
let dobro = function (a){
	return 2 * a
}

// Função arrow também é uma função anonima
dobro = a => {
	return 2 * a
}

// Retorno implicito para funcoes com apenas uma linha
dobro = a => 2 * a

let ola = function() {
	return 'Ola'
}

// Para uma função que nao tem parametros, deve ser passados parenteses vazios
ola = () => 'Ola' // ou ola = _ => 'Ola'