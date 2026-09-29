const readlineSync = require('readline-sync');

const ehCaro = n => n > 100;

let numero = readlineSync.question('Digite o primeiro numero de 0 a 200 \n');

let numero2 = readlineSync.question('Digite o segundo numero de 0 a 200 \n');

console.log(ehCaro(numero));
console.log(ehCaro(numero2));