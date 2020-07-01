//l'utente sceglie la difficoltà
var difficoltà = prompt("scegli la difficoltà : '0' '1' '2' ");
var max;
switch (difficoltà) {
    case "0" :
    max = 100;
    break; 
    case "1" :
    max = 80;
    break; 
    case "2" :
    max = 60;
    break; 
    default:
    alert ("La difficoltà inserita non esiste")
}

console.log(max);


//GENERA 16 numeri casuali tra 1 e max (no duplicati)
var numeriRandom = [];
var random;
for (var i = 0; i < 16; ++i) {
    random = generaNumeroRandom(1, max);
    if (inArray(numeriRandom, random) !=true) {
        numeriRandom[i] = random;
    } else {
        i--;
    }
}
console.log(numeriRandom);


//CHIEDI all'utente di inserire (max - 16)numeri tra 1 e max (no duplicati)
var numeriInseriti = [];
var punteggio = 0;

for (var i = 0; i < max - 16; ++i) {
    inserito = parseInt(prompt("inserisci un numero da 1 a " + max));
    if (inArray(numeriInseriti, inserito) !=true) {
        numeriInseriti[i] = inserito;
    } else {
        alert("Numero già inserito");
        i--;
    }

    //VERIFICO se il numero inserito non sia superiore del range max
    if (numeriInseriti[i] > max) {
        alert("Numero inserito troppo grande")
        i--
    } else {
        //VERIFICO se il numero inserito dall'utente è presente nell'array generato
        if (inArray(numeriRandom, inserito)) {
            document.getElementById("h1").innerHTML = "HAI PERSO! una bomba è esplosa. Hai totalizzato " + punteggio + " punti";
        } else{
            punteggio++;
        }
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
