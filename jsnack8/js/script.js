/*
    JSnack 8
    Chiedi un numero di 4 cifre all’utente
    e calcola la somma di tutte le cifre che compongono il numero.
    in questo caso possiamo sfruttare a nostro vantaggio il fatto che
    la funzione prompt restituisca una stringa anche se si è digitato un numero
    e recuperare una cifra alla volta usando il ciclo for per scorrere la stringa numerica
*/

/*

    1. Chiedi un numero all'utente
    2. Separa i valori con charAt (W3School) all' interno di un ciclo 
    3. Addizziona ogni numero ottenuto

*/

const userNumber = prompt('Inserisci un numero di 4 cifre!');
console.log(typeof(userNumber), userNumber);

const submit = document.querySelector('#submit');
let numbers;
let sum = 0; 
let x = 0;

for(let i = 1; i <= userNumber.length; i++){

    numbers = parseInt(userNumber.charAt(x));
    console.log('numbers', numbers);
    x++;
    sum += numbers;
}

console.log('somma', sum);
submit.innerHTML = `
Il numero alla posizione ${0} è ${userNumber.charAt(0)}! <br>
Il numero alla posizione ${1} è ${userNumber.charAt(1)}! <br>
Il numero alla posizione ${2} è ${userNumber.charAt(2)}! <br>
Il numero alla posizione ${3} è ${userNumber.charAt(3)}! <br>
La somma è ${sum}!
`
