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

    // Prezzo per chilometraggio
    const Regular = 0.21 * Km;
    console.log(Regular);

    // Sconto minori
    if ((Age) < 18) {
        document.write("<h3>IL PREZZO DEL TUO BIGLIETTO</h3>");
        const Price = Regular * 20 / 100;
        const Discounted = Regular - Price;
        console.log(Discounted);
        document.write(Discounted.toFixed(2));
        // Sconto senior
    } else if ((Age) > 64) {
        document.write("<h3>IL PREZZO DEL TUO BIGLIETTO</h3>");
        const Price = Regular * 40 / 100;
        const Discounted = Regular - Price;
        console.log(Discounted);
        document.write(Discounted.toFixed(2));
        // Biglietto regolare
    } else {
        const Regular = 0.21 * Km;
        document.write("<h3>IL PREZZO DEL TUO BIGLIETTO</h3>");
        document.write(Regular.toFixed(2));
    }
}