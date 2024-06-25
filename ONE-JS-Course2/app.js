let listOfDrawnedNumbers = [];
let maxSecretNumber = 10;
let secretNumber = generateRandomNumber(maxSecretNumber);
let counter = 1;

function changeTextContent(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
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
        changeTextContent('p', 'Voce acertou! o numero secreto ' + secretNumber + ', com ' + counter + stringTry + '!');
        document.getElementById('reset').removeAttribute('disabled');
    }

}

function cleanField() {
    userNumber = document.querySelector('input');
    userNumber.value = '';
}

function generateRandomNumber(maxSecretNumber) {
    let drawnedNumber = parseInt(Math.random() * maxSecretNumber + 1);

    if (!(listOfDrawnedNumbers.includes(drawnedNumber)) && listOfDrawnedNumbers.length < maxSecretNumber) {
        listOfDrawnedNumbers.push(drawnedNumber);
        return drawnedNumber;
    } else if (listOfDrawnedNumbers.includes(drawnedNumber) && listOfDrawnedNumbers.length < maxSecretNumber) {
        return generateRandomNumber(maxSecretNumber);
    } else {
        listOfDrawnedNumbers = [];
        return generateRandomNumber(maxSecretNumber);
    }
}

function start() {
    changeTextContent('h1', 'Adivinhe o numero');
    changeTextContent('p', 'Digite um numero de 1 a ' + maxSecretNumber);
}

function resetGame() {
    secretNumber = generateRandomNumber(maxSecretNumber);
    counter = 1;
    cleanField();
    start();
    document.getElementById('reset').setAttribute('disabled', true);
}

start();