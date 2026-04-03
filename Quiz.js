let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const feedbackElement = document.getElementById('feedback');
    const optionsContainer = document.getElementById('options-container');
    const questionElement = document.getElementById('question-text');

    feedbackElement.innerText = "";
    optionsContainer.innerHTML = "";

    const currentData = marcBlochQuiz[currentQuestionIndex];
    questionElement.innerText = currentData.question;

    if (currentData.type === 'multiple-choice' || currentData.type === 'book-choice'){
        currentData.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('quiz-option-btn');
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        })}
    if (currentData.type === 'true-false') {
    // 1. Buttons erstellen
    const buttonTrue = document.createElement('button');
    const buttonFalse = document.createElement('button');

    // 2. Klassen hinzufügen
    buttonTrue.classList.add('quiz-option-btn');
    buttonFalse.classList.add('quiz-option-btn');

    // 3. Texte setzen
    buttonTrue.innerText = 'Wahr';
    buttonFalse.innerText = 'Falsch';

    // 4. Onclick-Events (direkte Übergabe der Antwort)
    buttonTrue.onclick = () => {
        checkAnswer('Wahr');
    };
    
    buttonFalse.onclick = () => {
        checkAnswer('Falsch');
    };

    // 5. Dem Container hinzufügen
    optionsContainer.appendChild(buttonTrue);
    optionsContainer.appendChild(buttonFalse);
}
        
    };

function checkAnswer(selectedAnswer) {
    const currentData = marcBlochQuiz[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');

    if (selectedAnswer === marcBlochQuiz[currentQuestionIndex].answer) {
        feedbackElement.innerText = "Korrekt! Du hast die richtige Antwort.";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.innerText = "Falsch! Das ist die falsche Antwort.\n" + 'Richtige Antwort:' + marcBlochQuiz[currentQuestionIndex].answer;
        feedbackElement.style.color = "red";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < marcBlochQuiz.length) {
            loadQuestion();
        } else {
           zeigeErgebnisse();
        }
    }, 1500);
}

function zeigeErgebnisse() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Du hast ${score} von ${marcBlochQuiz.length} Fragen richtig beantwortet.</p>
        <button onclick="location.reload()">Nochmal versuchen</button>
    `;
}

// Initialer Start
loadQuestion();

let collapseBtn = document.getElementById('Collapse-Btn')

let sidebar = document.getElementById('sidebar')

let sidebarShown =  true;

collapseBtn.addEventListener('click', () => {
    updateSidebar()
})

function updateSidebar() {
    sidebarShown = !sidebarShown;

    if (!sidebarShown) {
        sidebar.classList.add('collapsed'); // Sidebar ausblenden
        collapseBtn.style.transform = 'rotate(180deg)';
        
        // Berechne die Position des Buttons neu, wenn die Sidebar weg ist
        collapseBtn.style.left = '20px'; 
    } else {
        sidebar.classList.remove('collapsed'); // Sidebar einblenden
        collapseBtn.style.transform = 'rotate(0deg)';
        collapseBtn.style.left = '180px';
    }
}