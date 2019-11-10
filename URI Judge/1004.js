let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

function produto (a,b) {
    return `PROD = ${parseInt(a) * parseInt(b)}`
}

console.log(produto(lines[0], lines[1]))