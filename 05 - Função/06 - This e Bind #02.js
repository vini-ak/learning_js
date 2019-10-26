function Person0() {
	this.age = 0

	// Função temporizadora
	setInterval(function() {
		this.age++
		console.log(this.age)
	}, 1000) // 1000 milisegundos
}

new Person0 // Será retornado NaN a cada 1 segundo

/************************************************/

function Person() {
	this.age = 0

	setInterval(function() {
		this.age++
		console.log(this.age)
	}.bind(this), 1000)
}

new Person

/************************************************/

function Person2() {
	this.age = 0

	const self = this
	// self é constante, logo não varia.

	setInterval(function() {
		self.age++
		console.log(self.age)
	}, 1000)
}

new Person2