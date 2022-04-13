/*
    JSnack 6
    Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

/*

    1. Chiedo all'utente quati numeri vuole stampare.
    2. Calcolo il cubo della quantita dinumeri indicati dall'utente.
    3. Stampo i risultati a schermo.

*/

const userAmount = parseInt(prompt('Di quanti numeri vuoi calcolare il cubo?'));

console.log(userAmount);
const submit = document.getElementById('submit');

for(let i = 1; i <= userAmount; i++){
    console.log('numero',i);
    powerNum = Math.pow(i, 3);
    console.log('potenza', powerNum);
    submit.innerHTML += `<li>Il cubo del numero ${i} è ${powerNum}</li>`
}


