/*
JSnack 4
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
    chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

/* 

    1. Chiedi all'utente il suo nome.
    2. Controlla se il suo nome é presente nell'array degli invitati.
    3. Stampare a schermo il risultato del controllo.

*/
const submit = document.querySelector('#submit');

const invitatiDiGatsby = ['manuel', 'francesco', 'sebastiano', 'andrea', 'riccardo']

const userName = prompt('Come ti chiami?').toLowerCase()


if(isNaN (userName)) {


    let nameVerification = false;
    
    for(let i = 0; i < invitatiDiGatsby.length; i++) {
        if(userName === invitatiDiGatsby[i]){
            nameVerification = true;
        } 
    
        console.log(nameVerification);
    }

    if(nameVerification) {

        submit.innerHTML = 'Benvenuto alla festa!';
    
    } else {
    
        submit.innerHTML = 'Mi spiace ma non sei nella lista!';
    
    }

} else {
    
    alert('Inserisci un nome!');

}


