// Classes serão bastante utilizadas quando for trabalhar com React
// Mas geralmente, serão utilizadas funções construtoras.

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const luz = new Lancamento('Luz', -100)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, luz)
console.log(contas.sumario())