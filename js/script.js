// JS console check
// console.log('JS ok!');

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

    // Costante del prezzo base del biglietto
    const TicketBasePrice = 0.21 * Km;
    console.log(TicketBasePrice);

    // Sconto età
    if ((Age) < 18) {
        let TicketPrice = TicketBasePrice * 20 / 100;
        console.log(TicketPrice);
    } if ((Age) > 64) {
        let TicketPrice = TicketBasePrice * 40 / 100;
        console.log(TicketPrice);
    }
    else {
        console.log(TicketBasePrice)
    }
}
