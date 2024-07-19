
/*step

1. Far sceglier all'utente con un prompt pari o dispari
2. Far sceglier all'utente con un prompt un numero da 1 a 5
3. Creare una funzione che generi un numero random da 1 a 6
    - generare un numero casuale per il computer
4. creo una funzione che faccia la somma 
    - sommo il numero inserito dall' utente e quello della cpu
5. creo una funzione che controlli che la somma dei numeri sia pari o dispari 
6. dichiaro chi ha vinto 


*/ 

//step 1
const myForm = document.querySelector ('form');

myForm.addEventListener(
    'submit',
    function (event){

        event.preventDefault();
        let parDisp = document.getElementById ('par-disp');
        let userNumber = document.getElementById ('user-number');
        console.log( parDisp.value);
        console.log(userNumber.value);
        const newNumber = parseInt(userNumber.value);



//step 2



        const cpuNumber = parseInt(randomNumber());
        console.log('numero random',cpuNumber);

        let resultSum = sum(newNumber, cpuNumber);
        console.log('La somma è:', resultSum);

        parODisp(resultSum);
        
        
        

// funzioni

    function randomNumber() { // creare un numero random
        const min = 1;
        const max = 5;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sum(x, y){ // funzione per la somma

        const resultSum= x + y;
        return resultSum;
        
    }

    function parODisp (j){ // funzione per controllare se è un numero pari o dispari
        
        
        if(j % 2 == 0){
            console.log('il numero è pari');
            return 'pari';
        }
        else{

            console.log('il numero è dispari');
            return 'dispari';
        }
            
    } 
}


);