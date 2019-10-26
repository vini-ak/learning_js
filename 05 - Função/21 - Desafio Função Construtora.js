function Pessoa(nome) {
	this.falar = () => console.log(`Meu nome é ${nome}`)
}

const pessoa = new Pessoa('André')
pessoa.falar()

// É possivel criar objetos através de:
// 1 - Classes (instanciando com o new);
// 2 - Função Factory;
// 3 - Função Construtora (instanciando com o new)