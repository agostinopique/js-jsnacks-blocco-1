/*
    JSnack 7
    Stampa le potenze di 2 fino a 1000.
    questo snack cela un trabocchetto:  1000 non è una potenza di 2
    perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
    perché altrimenti il controllo viene fatto dopo e si sfora
*/

/*

    1. Crea funzione che calcola la potenza di 2
    2. Dai il comando di stampare prima di calcolare la potenza, quindi metti prima la formula che esegue la potenza e solo dopo il comando ddella stampa.
    3. Stampa la potenza a schermo.

*/
const submit = document.querySelector('#submit');
let i = 2;

do {

    console.log(i);
    submit.innerHTML += `La potenza é ${i}<br>`;
    i = i * 2;

} while(i < 1000)

