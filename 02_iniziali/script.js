/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getInitials(namesArray) {
    let initials = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      let name = namesArray[i];
      let initial = name[0];
      initials.push(initial);
    }
  
    return initials;
  }
  
  

// Invoca la funzione qui e stampa il risultato in console

const result = getInitials(names);
  
console.log(result);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]