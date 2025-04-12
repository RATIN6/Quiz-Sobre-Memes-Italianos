const quizData = [
    {
        question: "o TRALALERO TRALALA é um ?",
        options: ["Tubarão com Pernas", "gato com pernas", "peixe humano", "Outro"],
        correct: 0
    },
    {
        question: "Qual meme tem o som 'tuntuntuntun sahur'?",
        options: ["Um Ganso Voador", "Bolsonaro De Calcinha", "Um Pau Com Pedaço De Pau", "Um Crocodilo Voador"],
        correct: 2
    },
    {
        question: "O que faz O 'Gangster Footera' Ser Engraçado ?",
        options: ["Dança engraçada", "Momento aleatório", "Expressão de poder", "Outro"],
        correct: 2
    },
    {
        question: "O que o 'BRR BRR PATAPIM' É?",
        options: ["Peixe Com Gato Voador", "Uma Árvore Com Pernas", "Um Crocodilo Com Pernas", "Outro"],
        correct: 1
    },
    {
        question: "O Oue O 'Lirili Larilá' É?",
        options: ["Um Elefante Com Cactos", "Uma Bola Voadora", "Cachorro Peixe", "Outro"],
        correct: 0
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((data, index) => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('quiz-question');
        quizElement.innerHTML = `
            <h3>${index + 1}. ${data.question}</h3>
            ${data.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(quizElement);
    });
}

function calculateResult() {
    let score = 0;
    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === data.correct) {
            score++;
        }
    });
    resultContainer.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

loadQuiz();

submitButton.addEventListener('click', calculateResult);