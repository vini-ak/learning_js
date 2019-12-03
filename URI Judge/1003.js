let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

soma = (a,b) => {
    return `SOMA = ${parseInt(a) + parseInt(b)}`
}
console.log(soma(lines[0], lines[1]))