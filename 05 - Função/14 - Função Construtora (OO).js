// A função construtora é o molde dos objetos
// O OO do JavaScript é baseado em funções

function Carro(velocidadeMaxima = 200, delta = 5) {
	// atributo privado pertence apenas ao escopo da função
	let velocidadeAtual = 0

	// metodo publico
	this.acelerar = function () {
		if (velocidadeAtual + delta <= velocidadeMaxima) {
			velocidadeAtual += delta
		} else {
			velocidadeAtual = velocidadeMaxima
		}
	}

	// metodo publico
	this.getVelocidadeAtual = function () {
		return velocidadeAtual
	}
}

const uno = new Carro // instanciando a função com os valores padrão
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5


const ferrari = new Carro(350, 20) // instanciando e passando valores
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // 60


typeof(Carro) // function
typeof(ferrari) // object


// Para criar variaveis ou metodos privados basta declarar com let ou const
// Para tornar publico, basta usar o this.