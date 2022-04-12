/*
    JSnack 2
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
*/
/*

    1. Chiedo la prima parola
    2. Chiedo la seconda parola
    3. Paragono le due parole
    4. Stampo la parola piú corta.
    5. Stampo la parola piú lunga.

*/

let firstWord;
let secondWord;

const submit = document.getElementById('submit');
    
firstWord = prompt('Inserisci la prima una parola!');
secondWord = prompt('Inserisci la seconda una parola!');

if(firstWord.length > secondWord.length){

    submit.innerHTML = `La parola più corta é '${secondWord}' e la parola più lunga é '${firstWord}'`;
    
} else if(firstWord.length < secondWord.length) {
    
    submit.innerHTML = `La parola più corta é '${firstWord}' e la parola più lunga é '${secondWord}'`;

} else {

    submit.innerHTML = `Le parole hanno la stessa lunghezza!`;

}

