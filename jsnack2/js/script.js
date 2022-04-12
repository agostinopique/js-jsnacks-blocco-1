/*
    JSnack 2
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
*/
/*

    1. Chiedo la prima parola
    2. Chiedo la seconda parola
    3. Paragono le due parole
    4. Stampo la parola piú lunga.

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

if(wordArr[0] > wordArr[1]){

    submit.innerHTML = `La parola più lunga é ${wordArr[0]}`;

} else {

    submit.innerHTML = `La parola più lunga é ${wordArr[1]}`;

}
