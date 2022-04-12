/* 

    1. Chiedo il primo numero
    2. Chiedo il secondo numero
    3. Paragono e stampo il maggiore.

*/

let userNum;

const submit = document.getElementById('submit');

let firstNum;
let secondNum;
    
firstNum = parseInt(prompt('Inserisci un numero!'));

secondNum = parseInt(prompt('Inserisci un numero!'));


if(firstNum > secondNum){

    submit.innerHTML = `Il numero maggiore é ${firstNum}`;

} else if (firstNum < secondNum){

    submit.innerHTML = `Il numero maggiore é ${secondNum}`;

} else {

    submit.innerHTML = `I numeri sono uguali!`;

}

