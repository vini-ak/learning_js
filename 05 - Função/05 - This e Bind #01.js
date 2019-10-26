const pessoa = {
	saudacao = 'Bom dia!',
	falar() {
		// Nesse exemplo, o this funciona como 
		console.log(this.saudacao)
	}
}

pessoa.falar()

// Caso a saudacao seja instanciada diretamente, dará erro:
const falar = pessoa.falar
falar() // o this é global, e aponta para o undefined

// O bind gera uma função que aponta para o this do objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()