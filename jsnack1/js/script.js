/* 

    1. Chiedo il primo numero
    2. Chiedo il secondo numero
    3. Paragono e stampo il maggiore.

*/



const userArr = [];

let roundsNum = 2;

let userNum ;

const submit = document.getElementById('submit');

for(i = 0; i < roundsNum; i++){
    
    userNum = prompt('Inserisci un numero!');
    userArr.push(userNum);
    console.log(userArr);

}

if(userArr[0] > userArr[1]){
    submit.innerHTML = `Il numero maggiore é ${userArr[0]}`;
} else{
    submit.innerHTML = `Il numero maggiore é ${userArr[1]}`;
}
