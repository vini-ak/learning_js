<<<<<<< HEAD
lines = require('lines')

console.log(a + b)
=======
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

soma = (a,b) => {
    return `X = ${parseInt(a) + parseInt(b)}`
}

console.log(soma(lines[0], lines[1]))
>>>>>>> 6e17d7f8ea6285842d3ff847ab5c978bd29f05d8
