console.log("Il quiz.js è stato caricato correttamente!");
alert("Quiz caricato!"); // Questo farà apparire un popup quando apri la pagina

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

window.onload = function() {
    // Assicuriamoci che l'oggetto esista, altrimenti crealo vuoto
    window.ccnaDatabase = window.ccnaDatabase || {};
    
    const selectedModule = localStorage.getItem("selectedModule");
    
    // Verifica che il modulo esista dentro l'oggetto
    if (!selectedModule || !window.ccnaDatabase[selectedModule]) {
        alert("Errore: Database non caricato correttamente. Riprova dalla home.");
        window.location.href = "index.html";
        return;
    }

    // Ora usiamo window.ccnaDatabase[selectedModule]
    document.getElementById("mod-title").innerText = selectedModule.toUpperCase();
    const allModuleQuestions = window.ccnaDatabase[selectedModule];

    // ... il resto del tuo codice rimane UGUALE a prima ...
    }

    // Imposta il titolo del modulo nella pagina
    document.getElementById("mod-title").innerText = selectedModule.toUpperCase();

    // 1. Pesca tutte le domande del modulo scelto dal database
    const allModuleQuestions = ccnaDatabase[selectedModule];

    // 2. Controllo di sicurezza: se ci sono meno di 20 domande, usiamo quelle disponibili
    const poolSize = allModuleQuestions.length;
    if (poolSize === 0) {
        document.getElementById("question-container").innerText = "Database vuoto. Aggiungi le domande nel file data.js!";
        return;
    }

    // 3. Mescola l'intero array delle domande (Algoritmo Fisher-Yates)
    const shuffled = [...allModuleQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 4. Prendi le prime 20 domande mescolate
    const targetCount = Math.min(10, poolSize);
    currentQuestions = shuffled.slice(0, targetCount);

    // Avvia la prima domanda
    loadQuestion();
};

function loadQuestion() {
    hasAnswered = false;
    document.getElementById("next-button").style.display = "none";
    document.getElementById("rationale-container").style.display = "none";

    const currentQuestion = currentQuestions[currentIndex];
    
    // Aggiorna contatore
    document.getElementById("progress-text").innerText = `Domanda ${currentIndex + 1} di ${currentQuestions.length}`;
    
    // Scrivi la domanda
    document.getElementById("question-container").innerText = currentQuestion.question;

    // Genera i pulsanti per le risposte
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerText = option;
        button.onclick = function() { checkAnswer(index, button); };
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, clickedButton) {
    if (hasAnswered) return; // Impedisce di cliccare più volte
    hasAnswered = true;

    const currentQuestion = currentQuestions[currentIndex];
    const optionButtons = document.querySelectorAll(".option-btn");

    // Mostra la spiegazione (Rationale)
    const rationaleBox = document.getElementById("rationale-container");
    rationaleBox.innerText = currentQuestion.rationale || "Nessuna spiegazione disponibile.";
    rationaleBox.style.display = "block";

    if (selectedIndex === currentQuestion.correct) {
        clickedButton.classList.add("correct");
        score++;
    } else {
        clickedButton.classList.add("wrong");
        // Evidenzia la risposta corretta in verde
        optionButtons[currentQuestion.correct].classList.add("correct");
    }

    // Mostra il pulsante per andare avanti o finire
    const nextButton = document.getElementById("next-button");
    if (currentIndex === currentQuestions.length - 1) {
        nextButton.innerText = "Vedi Risultati 📊";
    }
    nextButton.style.display = "block";
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("results-box").style.display = "block";
    
    document.getElementById("final-score").innerText = `${score} / ${currentQuestions.length}`;
    
    const feedbackText = document.getElementById("feedback-text");
    const percentage = (score / currentQuestions.length) * 100;

    if (percentage >= 80) {
        feedbackText.innerText = "Grandissimo! Sei prontissimo per l'esame ITS! 🎯";
        feedbackText.style.color = "#22c55e";
    } else if (percentage >= 60) {
        feedbackText.innerText = "Buono, ma ripassa i punti deboli prima della prova finale. 📚";
        feedbackText.style.color = "#38bdf8";
    } else {
        feedbackText.innerText = "Bisogna studiare ancora un po'. Rimettiti sotto con i PTSA! ⚠️";
        feedbackText.style.color = "#ef4444";
    }
}
