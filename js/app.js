schermfout = document.getElementById("fout");
schermGoed = document.getElementById("goed");
vraag1 = document.getElementById("vraag-1");
vraag2 = document.getElementById("vraag-2");

let index = 1; // Start met vraag 1
let totaalVragen = 10; // Stel het aantal vragen in

schermfout.style.display = "none";
schermGoed.style.display = "none";
vraag2.style.display = "none";

function antwoordFout() {
    document.getElementById(`vraag-${index}`).style.display = "none";
    schermfout.style.display = "block";
}

function antwoordGoed() {
    document.getElementById(`vraag-${index}`).style.display = "none";
    schermGoed.style.display = "block";
}

function volgendeVraag() {
    // Verberg de huidige vraag
    schermGoed.style.display = "none";
    schermfout.style.display = "none";
    index++;
    
    // Controleer of de volgende vraag bestaat
    if (index <= totaalVragen) {
        document.getElementById(`vraag-${index}`).style.display = "block";
    } else {
        console.log("Er zijn geen meer vragen");
    }
}