// Closure é o escopo criado quando uma fũnção é declarada
// Esse escopo permite a fuñção acessar e manipular variáveis externas à função

// Closure -> 'memória' do local onde a função foi definida

// Contexto léxico em ação!

const x = 'Global'

function fora() {
	const x = 'Local'
	function dentro() {
		return x
	}
	return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao) // 'Local'