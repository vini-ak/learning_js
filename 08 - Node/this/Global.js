// é preciso ter cuidado com o uso do global
// console.log(global) // padrões do node

global.MinhaApp = {
    saudacao() {
        return 'aí dento!'
    },
    nome : 'Sisteminha'
}

global.Ai = Object.freeze({
    oi() {
        return 'Tá congelada essa mzr'
    },
    nome : 'Tabaco'
})