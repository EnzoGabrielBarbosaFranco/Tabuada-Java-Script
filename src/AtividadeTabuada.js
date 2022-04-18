let valorEntrada = require('prompt-sync')();
console.log('Digite o valor a ser multiplicado: ');
let multiplicando = valorEntrada();
let i;

for ( i = 1; i <= 10; i++) {
    console.log(multiplicando + " X " + i + " = " + (multiplicando*i));
}

