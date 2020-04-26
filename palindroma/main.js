// palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

function controllo_palindromo(parola_utente) {
    var valore_inverso = parola_utente.split('').reverse().join('');

    if (parola_utente == valore_inverso) {
        console.log('La parola ' + parola_utente + ' è un palindromo.');
    } else {
        console.log('La parola ' + parola_utente + ' non è un palindromo.');
    }
}

var parola_utente = prompt('Inserisci una parola per controllare se è palindroma o meno.');
controllo_palindromo(parola_utente)
