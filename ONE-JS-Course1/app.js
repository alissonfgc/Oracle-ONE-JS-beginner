alert('Boas vindas ao jogo do numero secreto!');

let maxSecretNumber = 100;
let secretNumber = parseInt(Math.random() * maxSecretNumber + 1);
let userNumber;
let counter = 1;

while (secretNumber != userNumber) {

    userNumber = prompt('Escolha um numero entre 1 e ' + maxSecretNumber);

    if (secretNumber > userNumber) {
        alert('O numero ' + userNumber + ' e menor que o numero secreto, tente novamente ');
    } else if (secretNumber < userNumber) {
        alert('O numero '  + userNumber + ' e maior que o numero secreto, tente novamente ');
    } else {
        let stringTrys = counter > 1 ? ' tentativas' : ' tentativa';
        alert('Voce acertou, o numero : ' + secretNumber + ', Com: ' + counter + stringTrys);
        break;
    }
    counter ++;
}