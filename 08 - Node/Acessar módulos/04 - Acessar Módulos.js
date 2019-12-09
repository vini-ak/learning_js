const moduloA = require('../02 - Sistema de Arquivos/moduloA')   // O ponto significa que o módulo a ser acessado está na pasta corrente
const oo = require('../../06 - OO/10 - JSON')  // Sobe uma nível (pasta learning_js) e entra na pasta '06 - OO' para procurar 
const moduloB = require('/home/vinicius/Área de Trabalho/Kyoto/JavaScript/learning_js/08 - Node/02 - Sistema de Arquivos/moduloB.js')   // Passando todo o path do arquivo

console.log(moduloA.ola)
console.log(moduloB.boaNoite())

// MODULO DE TERCEIRO:
const saudacao = require('saudacao')    // Procurando o modulo saudacao dentro node_modules
console.log(saudacao.ola)

// MODULO DO PROPRIO NODE:
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

// createServer() -> cria um servidor http
// listen() -> cria um listener na porta especificada