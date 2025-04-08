/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function countVowels(phrase) {
    let vowelsNumber = 0;

    for( let i = 0; i < phrase.length; i++) {
        const currentChar = phrase[i];

        if ( currentChar ===  "a" ||
            currentChar ===  "e" ||
            currentChar ===  "i" ||
            currentChar ===  "o" ||
            currentChar ===  "u" 
        ) {
            vowelsNumber += 1;
            console.log(phrase[i]);
            
        }
    }
    return vowelsNumber;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)