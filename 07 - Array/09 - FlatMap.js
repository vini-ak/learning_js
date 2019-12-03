const escola = [{
    nome : 'Turma M1',
    alunos : [{nome : 'Gustavo', nota : 8.1}, {nome : 'Ana', nota : 9.3}]
}, {
    nome : 'Turma M2',
    alunos : [{nome : 'Rebeca', nota : 8.9}, {nome : 'Roberto', nota : 7.3}]
}]

const getNotaDoAluno = aluno => aluno.nota  // Retorna a nota de um aluno
const getNotasTurma = turma => turma.alunos.map(getNotaDoAluno) // Retorna a nota de todos os alunos de uma turma

const notas1 = escola.map(getNotasTurma)    // Retorna a nota de todos os alunos da escola
console.log(notas1)

// FlatMap

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)