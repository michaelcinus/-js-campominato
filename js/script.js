//GENERA 16 numeri casuali tra 1 e 100 (no duplicati)
var numeriRandom = [];
var random;
for (var i = 0; i < 4; i++) {
    random = generaNumeroRandom(1, 100)
    var nuovoNumero = true;
    for (var cont = 0; cont < i; cont++){
        if (numeriRandom[cont] == random){
            nuovoNumero = false;
        } else if (nuovo = true) {
            numeriRandom[i] = random;
        } else {
            i--;
        }
    }
}
console.log(numeriRandom);


//CHIEDI all'utente di inserire (100 - 16)numeri tra 1 e 100 (no duplicati)

//COMUNICA all'utente il punteggio

//FUNCTION genera numeri casuali
function generaNumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }

//FUNCTION chiedi e verifica numeri