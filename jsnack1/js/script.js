/* 

    1. Chiedo il primo numero
    2. Chiedo il secondo numero
    3. Paragono e stampo il maggiore.

*/

const submit = document.getElementById('submit');

let firstNum;
let secondNum;
// CONTROLLO
while (isNaN(firstNum)){
    firstNum = parseInt(prompt('Inserisci un numero!'));
    if (isNaN(firstNum)) alert('Inserisci un numero!')
}

while (isNaN(secondNum)){
    secondNum = parseInt(prompt('Inserisci un altro numero!'));
    if (isNaN(secondNum)) alert('Inserisci un numero!')
}
// /CONTROLLO


if(firstNum > secondNum){

    submit.innerHTML = `Il numero maggiore é ${firstNum}`;

} else if (firstNum < secondNum){

    submit.innerHTML = `Il numero maggiore é ${secondNum}`;

} else {

    submit.innerHTML = `I numeri sono uguali!`;

}
