schermfout = document.getElementById("fout");
schermGoed = document.getElementById("goed");

let index = 1; // Start met vraag 1
let totaalVragen = 10; // Stel het aantal vragen in
let correcteAntwoordenTeller = 0;

schermfout.style.display = "none";
schermGoed.style.display = "none";
document.getElementById("einde").style.display = "none";
// vraag2.style.display = "none";
// vraag3.style.display = "none";

for (let i = 2; i <= totaalVragen; i++) {
    let vraag = document.getElementById(`vraag-${i}`);
    if (vraag) {
        vraag.style.display = "none";
    }
}

const correcteAntwoorden = ["hond", "fiets", "windmolen", "vlag", "kaas", "boek", "huis", "boot", "koe", "trein"];

function antwoordFout() {
    document.getElementById(`vraag-${index}`).style.display = "none";
    schermfout.style.display = "block";
    document.getElementById("juisteAntwoord").innerHTML = correcteAntwoorden[index - 1];
}

function antwoordGoed() {
    document.getElementById(`vraag-${index}`).style.display = "none";
    schermGoed.style.display = "block";
    correcteAntwoordenTeller++;
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

    document.getElementById('keyboard').style.display = "none";
    document.getElementById('feedback').style.display = "none";
    document.getElementById('language-selection').style.display = "none";
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

        document.getElementById('keyboard').style.display = "flex";
        document.getElementById('feedback').style.display = "flex";
        document.getElementById('language-selection').style.display = "flex";
    } else {
        console.log("Er zijn geen meer vragen");
        document.getElementById("einde").style.display = "block";
        document.getElementById("resultaat").innerText = `Je hebt ${correcteAntwoordenTeller} van de ${totaalVragen} vragen goed beantwoord.`;
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


const translations = {
    arabic: {
        'A': 'ا', 'B': 'ب', 'C': 'ج', 'D': 'د', 'E': 'إ', 'F': 'ف', 'G': 'غ', 'H': 'ه', 
        'I': 'ي', 'J': 'ج', 'K': 'ك', 'L': 'ل', 'M': 'م', 'N': 'ن', 'O': 'و', 'P': 'پ', 
        'Q': 'ق', 'R': 'ر', 'S': 'س', 'T': 'ت', 'U': 'ؤ', 'V': 'ڤ', 'W': 'و', 'X': 'خ', 
        'Y': 'ي', 'Z': 'ز'
    },
    ukrainian: {
        'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г', 'H': 'Х', 
        'I': 'І', 'J': 'Й', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П', 
        'Q': 'К', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У', 'V': 'В', 'W': 'Ш', 'X': 'Кс', 
        'Y': 'Й', 'Z': 'З'
    }
};

const flagImages = {
    arabic: 'img/Arabic.svg',
    ukrainian: 'img/Ukraine.svg.png',
    dutch: 'img/Nederland.webp'
};

let currentLanguage = '';

function setLanguage(language) {
    currentLanguage = language; // Update de taal

    const feedbackFlag = document.getElementById('geselecteerde_vlag');
    feedbackFlag.src = flagImages[language];
}




function showLetter(letter) {
    console.log("showLetter called with:", letter); // Debugging log

    document.getElementById('dutchLetter').innerText = letter;


    const currentInput = document.getElementById(`input${index}`);
    if (currentInput) {
        currentInput.value += letter;
    }

    const translation = translations[currentLanguage][letter];
    
    document.getElementById('translatedLetter').innerText = translation || 'Geen vertaling';


}



addEventListenerToInput();