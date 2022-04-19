/*
    JSnack 5
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array
*/

/*

    1. Crea un array vuoto
    2. Con 6 prompt chiedi all'utente di inserire 6 numeri.
    3. Verifica che il numero inserito ogni volta sia pari o dispar.
    4. Se il numero inserito è dispari, inseriscilo nell'array

*/

const arrNumber = [];

console.log('array di numeri dispari', arrNumber);

let numbNeeded = 6;
let i = 0;
let numbRequest;

do {
    
    numbRequest = parseInt(prompt(`Inserisci un numero ${numbNeeded - i} volte!`));
    
    if(!(isNaN (numbRequest))){
        
        if(numbRequest % 2) {
            arrNumber.push(numbRequest);
        }  
        i++;
        console.log('numero inserito', numbRequest);

    } else {

        alert('Inserisci un numero!');

    }
    
   

} while (i < numbNeeded); 