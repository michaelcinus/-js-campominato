//l'utente sceglie la difficoltà
var difficoltà = prompt("scegli la difficoltà : '0' '1' '2' ");
var max;
var min;
switch (difficoltà) {
    case "0" :
     min = 1;
     max = 100;
     break; 
    case "1" :
     min = 1;
     max = 80;
     break; 
    case "2" :
     min = 1;
     max = 60;
     break; 
    default:
        min = 1;
        max = 100;
    }

//GENERA 16 numeri casuali tra 1 e max (no duplicati)
var numeriRandom = [];
var random;
var contRandom = 0;
while (contRandom < 16) {
    random = generaNumeroRandom(min, max);
    if (inArray(numeriRandom, random) !=true) {
        numeriRandom.push(random);
        contRandom++;
    }
}
console.log(numeriRandom, contRandom);

//CHIEDI all'utente di inserire (max - 16)numeri tra 1 e max (no duplicati)
var numeriInseriti = [];
var punteggio = 0;
var i = 0; 
var bomba = false;

while (i < max - contRandom && bomba == false) {
    inserito = parseInt(prompt("inserisci un numero da 1 a " + max));
    //VERIFICO se il numero inserito è già presente nell'array numeri Inseriti
    if (inArray(numeriInseriti, inserito) ==true) {
        alert("Numero già inserito");
    }   //VERIFICO se il numero inserito non sia superiore del range max, o min o NaN
    else if (inserito > max || inserito < min || isNaN(inserito)) {
        alert("Numero inserito non è valido")
    }   //VERIFICO se il numero inserito dall'utente è presente nell'array numeri Random
    else if (inArray(numeriRandom, inserito)) {
        document.getElementById("h1").innerHTML = "HAI PERSO! una bomba è esplosa. Hai totalizzato " + punteggio + " punti";
        bomba = true;
    } else {
        numeriInseriti.push(inserito);
        punteggio++;
        i++;
    }
}  
console.log(numeriInseriti);
console.log(punteggio);

//COMUNICA all'utente il punteggio
if (punteggio == numeriInseriti.length){
    document.getElementById("h1").innerHTML = "HAI VINTO! hai totalizzato " + punteggio + " punti";
}

//FUNCTION genera numeri casuali
function generaNumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

//FUNCTION verifica numero già esistente
function inArray (array, elemento) {
    var i = 0;
    var trovato = false;
    while (i < array.length && trovato == false) {
        if (array[i] == elemento){
            trovato = true;
        } 
        i++;
    }
    return trovato;
}
