

function controllo_palindromo(parola_utente) {
    var valore_inverso = parola_utente.split('').reverse().join('');

    if (parola_utente == valore_inverso) {
        console.log('La parola ' + parola_utente + ' è un palindromo.');
    } else {
        console.log('La parola ' + parola_utente + ' non è un palindromo.');
    }
}

var parola_utente = prompt('Inserisci una parola per controllare se è palindroma o meno.');
var valore_inverso = 0;
