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


const wordArr = [];

const wordLimit = 2;

let userWord;

const submit = document.getElementById('submit');

for(i = 0; i < wordLimit; i++){
    
    userWord = prompt('Inserisci una parola!');
    wordArr.push(userWord);
    console.log(wordArr);

}

if(wordArr[0].length > wordArr[1].length){

    submit.innerHTML = `La parola più corta é '${wordArr[1]}' e la parola più lunga é '${wordArr[0]}'`;
    
} else if(wordArr[0].length < wordArr[1].length) {
    
    submit.innerHTML = `La parola più corta é '${wordArr[0]}' e la parola più lunga é '${wordArr[1]}'`;

} else {

    submit.innerHTML = `Le parole hanno la stessa lunghezza!`;

}

