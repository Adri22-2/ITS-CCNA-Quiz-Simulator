let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

window.onload = function() {
    window.ccnaDatabase = window.ccnaDatabase || {};
    const selectedModule = localStorage.getItem("selectedModule");
    
    if (!selectedModule || !window.ccnaDatabase[selectedModule]) {
        alert("Errore: Modulo non trovato. Torna alla home.");
        return;
    }

    currentQuestions = window.ccnaDatabase[selectedModule];
    document.getElementById("mod-title").innerText = selectedModule.toUpperCase();
    loadQuestion();
};

function loadQuestion() {
    if (currentIndex >= currentQuestions.length) {
        document.getElementById("question").innerText = "Quiz completato!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").innerText = "Punteggio finale: " + score + " su " + currentQuestions.length;
        return;
    }
    hasAnswered = false;
    let q = currentQuestions[currentIndex];
    document.getElementById("question").innerText = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
    document.getElementById("feedback").innerText = "";
}

function checkAnswer(selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;
    let q = currentQuestions[currentIndex];
    let feedback = document.getElementById("feedback");
    
    if (selectedIndex === q.correct) {
        score++;
        feedback.innerHTML = "<span style='color:green'>Corretto!</span> " + q.rationale;
    } else {
        feedback.innerHTML = "<span style='color:red'>Sbagliato.</span> La risposta era: " + q.options[q.correct] + ". " + q.rationale;
    }
    
    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Prossima Domanda";
    nextBtn.style.marginTop = "20px";
    nextBtn.onclick = () => { currentIndex++; loadQuestion(); };
    feedback.appendChild(document.createElement("br"));
    feedback.appendChild(nextBtn);
}
