const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulheresChinesas = c => c.genero === 'F' && c.pais === 'China'
    const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual
    const menor = funcionarios.filter(mulheresChinesas).reduce(menorSalario)
    console.log(menor)
})