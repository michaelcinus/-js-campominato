//GENERA 16 numeri casuali tra 1 e 100 (no duplicati)
var numeriRandom = [generaNumeroRandom(1, 100)];
var random;
for (var i = 0; i < 4; ++i) {
    random = generaNumeroRandom(1, 100);
    var boolean = numeriRandom.includes(random);
    if (boolean == false) {
        numeriRandom[i] = random;
    } else {
        i--;
    }
    /*var nuovoNumero = true;
    for (var cont = 0; cont < i; cont++){
        if (numeriRandom[cont] == random){
            nuovoNumero = false;
        } else if (nuovoNumero == true) {
            numeriRandom[i] = random;
        } else {
            i--;
        }
    } */
}
console.log(numeriRandom);


//CHIEDI all'utente di inserire (100 - 16)numeri tra 1 e 100 (no duplicati)
var numeriInseriti = [parseInt(prompt("inserisci un numero da 1 a 100"))];
var punteggio = 0;

for (var i = 0; i < 4; ++i) {
    inserito = parseInt(prompt("inserisci un numero da 1 a 100"));
    var boolean = numeriInseriti.includes(inserito)
    if (boolean == false) {
        numeriInseriti[i] = inserito;
    } else {
        alert("Numero già inserito");
        i--;
    }

    //VERIFICO se il numero inserito dall'utente è presente nell'array generato
    for (var cont = 0; cont < numeriRandom.length; cont++){
        if (numeriInseriti[i] == numeriRandom[cont]) {
        var ris = true;
       }
    }
    
    if (ris == true) {
        document.getElementById("h1").innerHTML = "HAI PERSO! hai preso una bomba";
        break;
    } else{
        punteggio++;
    }
}  
console.log(numeriInseriti);
console.log(punteggio);


//COMUNICA all'utente il punteggio

//FUNCTION genera numeri casuali
function generaNumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
