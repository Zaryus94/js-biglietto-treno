// JS console check
// console.log('JS ok!');

// Costante del prezzo base del biglietto di viaggio
const TicketBasePrice = 0.21;
console.log(TicketBasePrice);

// Prompt richiesta dati
const Km = prompt('Benvenuto nel servizio di calcolo prezzo per i biglietti delle principali compagnie ferroviarie. Inserisci il numero di kilometri che desideri percorrere');
if (isNaN(Km)) {
    alert('Non hai inserito un numero! Ricarica la pagina e riprova');

} else {
    console.log(Km);
    const Age = prompt('Inserisci la tua età per poter usufruire dello sconto under 18 o over 65 altrimenti clicca su "Annulla"');
    if (isNaN(Age)) {
        alert('Non hai inserito un numero! Ricarica la pagina e riprova');
    }
    else console.log(Age);
}
