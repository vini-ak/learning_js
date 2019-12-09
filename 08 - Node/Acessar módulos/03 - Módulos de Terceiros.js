const _ = require('lodash')
// setInterval() -> funciona como o time do Python -> setInterval(funcao, tempo em milisegundos)
setInterval(() => console.log(_.random(1,1000)), 2000)