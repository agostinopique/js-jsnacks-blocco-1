/*
    JSnack 3
    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
    Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

/*

    1. Chiedo all'utente di inserire un numero, chiedo per 5 volte.
    2. Salvo gli input in un array.
    3. Sommo tutti gli elementi dell'array con un ciclo for e stampo a schermo.
    4. Sommo tutti gli elementi dell'array con un ciclo while e stampo a schermo.

*/

const inputLimit = 5

let userInput;

const submit = document.querySelector('#submit');

let arrSum = 0;

for(let i = 0; i < inputLimit; i++) {

    userInput = parseInt(prompt('Inserisci un numero!'));
    arrSum += userInput;
    console.log('somma con for', arrSum);
}


submit.innerHTML = `La somma dei tuoi con for numeri é ${arrSum}`;
*/

// ALTERNATIVA CON WHILE
/*
let i = 0;

while(i < inputLimit) {

    userInput = parseInt(prompt('Inserisci un numero!'));
    arrSum += userInput;
    console.log('somma con while', arrSum);
    i++;

}

submit.innerHTML = `La somma dei tuoi numeri con while é ${arrSum}`;
*/