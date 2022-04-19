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

// let firstWord;
// let secondWord;

const submit = document.getElementById('submit');

// CONTROLLO
let arrFristWord = [];
let arrSecondWord = [];

while(arrFristWord.length > 1 || arrFristWord.length == 0){

    const firstWord = prompt('Inserisci la prima una parola!').trim(); 
    //.trim(rimuove gli spazi all'inizio e alla fine della stringa);
    
    // eseguo la divisione nel caso in cui vengono inserite più parole nel prompt 
    if(firstWord.length != 0) {
        arrFristWord = firstWord.split(' ');
    }

    console.log(arrFristWord);

    // Se l'array che conterrà le parole splittate é più lungo di 1 allora mostra l'alert
    if(arrFristWord.length > 1){
        alert('Inserisci solo una parola');
    }

}

while(arrSecondWord.length > 1 || arrSecondWord.length == 0){

    const secondWord = prompt('Inserisci la seconda una parola!').trim();

    if(secondWord.length != 0) {
        arrSecondWord = secondWord.split(' ');
    }


    console.log(arrSecondWord);

    if(arrSecondWord.length > 1){
        alert('Inserisci solo una parola');
    }

}

// /CONTROLLO





if(firstWord.length > secondWord.length){

    submit.innerHTML = `La parola più corta é '${secondWord}' e la parola più lunga é '${firstWord}'`;
    
} else if(firstWord.length < secondWord.length) {
    
    submit.innerHTML = `La parola più corta é '${firstWord}' e la parola più lunga é '${secondWord}'`;

} else {

    submit.innerHTML = `Le parole hanno la stessa lunghezza!`;

}

