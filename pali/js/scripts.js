
/*step 

    1. Creare un prompt dove si chiede all'utente di inserire una parola
    2. Creare una funzione per controllare se la parola inserita è palindroma
    3. Dare un return in base alla parola
        - se la parola e palindroma result true 
        - altrimenti return false


*/


// step 1

const word = prompt(' inserisci una parola');
console.log(word);

//step 2

let charactersWord = word.split('');
let wordReverse = charactersWord.reverse().join('');

//step 3
    if(word == wordReverse){

        console.log ('La parola inserita è palindroma');
    }

    else{
        console.log ('La parola inserita non è palindroma');
    }
    
   

    