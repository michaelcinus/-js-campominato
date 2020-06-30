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
    max = 20;
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
    var boolean = numeriRandom.includes(random);
    if (boolean == false) {
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
    var boolean = numeriInseriti.includes(inserito)
    if (boolean == false) {
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
        for (var cont = 0; cont < numeriRandom.length; cont++){
            if (numeriInseriti[i] == numeriRandom[cont]) {
            var ris = true;
           }
        }
        
        if (ris == true) {
            document.getElementById("h1").innerHTML = "HAI PERSO! una bomba è esplosa. Hai totalizzato " + punteggio + " punti";
            break;
        } else{
            punteggio++;
        }
    }
}  
console.log(numeriInseriti);
console.log(punteggio);


//COMUNICA all'utente il punteggio
if (punteggio == numeriInseriti.length){
    document.getElementById("risultato").innerHTML = "HAI VINTO! hai totalizzato " + punteggio + " punti";

}

//FUNCTION genera numeri casuali
function generaNumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
