// HERANÇA

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filha extends Pai {
    constructor(sobrenome, profissao, nome = 'Isabella') {
        super(sobrenome)
        super(profissao)
        this.nome = nome
    }
}