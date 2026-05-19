// Dichiarazione variabili globali (una sola volta)
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

window.onload = function() {
    // Inizializza il database globale se non esiste
    window.ccnaDatabase = window.ccnaDatabase || {};
    
    // Recupera il modulo selezionato dalla home
    const selectedModule = localStorage.getItem("selectedModule");
    
    console.log("Modulo selezionato:", selectedModule);
    console.log("Database disponibile:", window.ccnaDatabase);

    // Controllo di sicurezza
    if (!selectedModule || !window.ccnaDatabase[selectedModule]) {
        alert("Errore: Modulo non trovato o database non caricato correttamente.");
        return;
    }

    // Carica le domande del modulo scelto
    currentQuestions = window.ccnaDatabase[selectedModule];
    document.getElementById("mod-title").innerText = selectedModule.toUpperCase();
    
    // Avvia il quiz
    loadQuestion();
};

function loadQuestion() {
    if (currentIndex < currentQuestions.length) {
        hasAnswered = false;
        let q = currentQuestions[currentIndex];
        
        document.getElementById("question").innerText = q.question;
        let optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        
        q.options.forEach((opt, index) => {
            let btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(index);
            optionsDiv.appendChild(btn);
        });
        
        document.getElementById("feedback").innerText = "";
    } else {
        document.getElementById("question").innerText = "Quiz terminato! Punteggio finale: " + score;
        document.getElementById("options").innerHTML = "";
    }
}

function checkAnswer(selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;
    
    let q = currentQuestions[currentIndex];
    let feedback = document.getElementById("feedback");
    
    if (selectedIndex === q.correct) {
        score++;
        feedback.innerText = "Corretto! " + q.rationale;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Sbagliato. La risposta era: " + q.options[q.correct] + ". " + q.rationale;
        feedback.style.color = "red";
    }
    
    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 3000);
}
