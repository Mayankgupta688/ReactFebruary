var random = require('randomize');
var arrRandom = [];
for(let i = 0; i < 10; i++) {
    var randomNumber = random(20);
    arrRandom.push(randomNumber);
}

console.log(arrRandom);

debugger;