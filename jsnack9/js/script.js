/*
JSnack 9
    Calcola la somma e la media dei primi 10 numeri.
*/

const submit = document.querySelector('#submit');

const iterations = 10;
let somma = 0;
let media = 0;

for(let i = 1; i <= iterations; i++) {

    somma += i;
    console.log(somma);

}

media = somma / iterations;

console.log(media);

submit.innerHTML = `La somma dei numeri é ${somma} e la loro media é ${media}`;
