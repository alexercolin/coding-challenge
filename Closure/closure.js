//O que é Closure ?
//Closure é quando uma função "lembra"
//seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const sumX = require('./scope')

let x = 100

//A resposta continuará sendo 53, mesmo eu declarando o x nesse arquivo
// Por que a função ela lembra do seu escopo léxico.
//Escopo léxico é onde a função foi FISICAMENTE CRIADA
//Então, o valor de x continua sendo 50, por que a função vai executar
//conforme o arquivo onde ela foi declarada.

console.log(sumX())