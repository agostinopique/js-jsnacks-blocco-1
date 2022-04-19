/*
    JSnack 3
    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
    Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

/*

    1. Chiedo all'utente di inserire un numero, chiedo per 5 volte.
    2. Sommo tutti gli elementi salvando il risultato in una variabile con un ciclo for e stampo a schermo.
    4. Sommo tutti gli elementi salvando il risultato in una variabile con un ciclo while e stampo a schermo.

*/

const inputLimit = 5


const submit = document.querySelector('#submit');

let sum = 0;


for(let i = 0; i < inputLimit; i++) {
    let userInput;
    while(isNaN(userInput)){
            userInput = parseInt(prompt(`Inserisci un numero per ${inputLimit - i} volte!`));

        }

    sum += userInput;
    console.log('somma con for', sum);
}


submit.innerHTML = `La somma dei tuoi numeri con for é ${sum}`;


// ALTERNATIVA CON WHILE
/*
let i = 0;

while(i < inputLimit) {
    let userInput;

    // controllo
    while(isNaN(userInput)){
        userInput = parseInt(prompt(`Inserisci un numero per ${inputLimit - i} volte!`));

    }
    sum += userInput;
    console.log('somma con while', sum);
    i++;

}

submit.innerHTML = `La somma dei tuoi numeri con while é ${sum}`;
*/