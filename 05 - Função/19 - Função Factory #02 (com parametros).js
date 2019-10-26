function criarProduto(nome, preco, desconto = 0.1) {
	return {
		nome: nome,
		preco,
		desconto: desconto,
		aplicarDesconto () {
			this.preco = this.preco - (this.preco * this.desconto)
			return this.preco
		}
	}
}

notebook = criarProduto('Mac Book', 2456.00)
console.log(notebook.aplicarDesconto())