let maxSecretNumber = 100;
let secretNumber = generateRandomNumber(maxSecretNumber);
let counter = 1;

function changeTextContent(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function verifyTry() {
    let userNumber = document.querySelector('input').value;

    if (secretNumber > userNumber) {
        changeTextContent('p', 'O numero ' + userNumber + ' e menor que o numero secreto!');
        counter++;
        cleanField();
    } else if (secretNumber < userNumber) {
        changeTextContent('p', 'O numero ' + userNumber + ' e maior que o numero secreto!');
        counter++;
        cleanField();
    } else {
        let stringTry = counter > 1 ? ' tentativas' : ' tentativa';
        changeTextContent('h1', 'Voce acertou!');
        changeTextContent('p', 'Voce acertou o numero secreto ' + secretNumber + ', com ' + counter + stringTry + '!');
    }

}

function cleanField() {
    userNumber = document.querySelector('input');
    userNumber.value = '';
}

function generateRandomNumber(maxSecretNumber) {
    return parseInt(Math.random() * maxSecretNumber + 1);
}

changeTextContent('h1', 'Jogo do bixo');
changeTextContent('p', 'Digite um numero de 1 a ' + maxSecretNumber);