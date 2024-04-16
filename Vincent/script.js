let number = 143678; // Initieel getal
let interval; // Variabele om het interval bij te houden

function wachtrij() {
    let minCeiled = Math.ceil(3000);
    let maxFloored = Math.floor(9000);
    let calc = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    setTimeout(update, calc); // Start de eerste update na een willekeurig aantal milliseconden
}

function update() {
    number--; // Verminder de waarde van number met 1
    document.getElementById("wachtrij").innerText = number; // Voeg de nieuwe waarde toe aan het HTML-element

    if (number > 0) {
        let minCeiled = Math.ceil(3000);
        let maxFloored = Math.floor(9000);
        let calc = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        setTimeout(update, calc); // Plan de volgende update na een willekeurig aantal milliseconden
    } else {
        clearInterval(interval); // Stop het interval als het getal 0 bereikt
    }
}

wachtrij();
