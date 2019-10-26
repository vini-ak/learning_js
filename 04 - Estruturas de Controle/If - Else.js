// separar o codigo em blocos não é obrigatorio pro if-else


const aprovadoOuReprovado = nota => {
	if (nota >= 7) {
		return 'Aprovado!!!'
	} else {
		return 'Reprovado, infiliz...'
	}
}


const print = arg => console.log(arg)


print(aprovadoOuReprovado(8))
print(aprovadoOuReprovado(6.9))
print(aprovadoOuReprovado(7))