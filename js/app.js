schermfout = document.getElementById("fout");
schermGoed = document.getElementById("goed");

let index = 1; // Start met vraag 1
let totaalVragen = 10; // Stel het aantal vragen in

schermfout.style.display = "none";
schermGoed.style.display = "none";
// vraag2.style.display = "none";
// vraag3.style.display = "none";

for (let i = 2; i <= totaalVragen; i++) {
    let vraag = document.getElementById(`vraag-${i}`);
    if (vraag) {
        vraag.style.display = "none";
    }
}

const correcteAntwoorden = ["hond", "fiets", "windmolen", "antwoord4", "antwoord5", "antwoord6", "antwoord7", "antwoord8", "antwoord9", "antwoord10"];

function antwoordFout() {
    document.getElementById(`vraag-${index}`).style.display = "none";
    schermfout.style.display = "block";
}

function antwoordGoed() {
    document.getElementById(`vraag-${index}`).style.display = "none";
    schermGoed.style.display = "block";
}

function checkAntwoord() {
    // Haal de waarde van de huidige input op
    let huidigeInput = document.getElementById(`input${index}`).value.toLowerCase();
    
    // Vergelijk de waarde van de input met het correcte antwoord
    if (huidigeInput === correcteAntwoorden[index - 1]) {
        antwoordGoed();
    } else {
        antwoordFout();
    }
}

function volgendeVraag() {
    // Verberg de huidige vraag
    schermGoed.style.display = "none";
    schermfout.style.display = "none";
    index++;
    console.log(index);
    
    // Controleer of de volgende vraag bestaat
    if (index <= totaalVragen) {
        document.getElementById(`vraag-${index}`).style.display = "block";
        addEventListenerToInput();
    } else {
        console.log("Er zijn geen meer vragen");
    }
}

function addEventListenerToInput() {
    console.log(`input${index}`);
    document.getElementById(`input${index}`).addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Enter is ingedrukt");
            checkAntwoord();
        }
    });
}

addEventListenerToInput();