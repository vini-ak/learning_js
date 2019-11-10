let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

circle = r => {
    return `A=${((parseFloat(r)**2) * 3.14159).toFixed(4)}`
}
console.log(circle(lines[0]))