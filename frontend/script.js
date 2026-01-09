 const API_URL = 'https://programming-quiz-6x7a.onrender.com/api';  
 // const API_URL = 'http://localhost:5000/api';

let questions = [];
let currentQuestionIndex = 0;
let language = '';

// Get language from URL parameter
function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('language');
}

// Load questions for selected language
async function loadQuestions() {
    language = getLanguageFromURL();
    
    if (!language) {
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/questions/${language}`);
        questions = await response.json();
        
        if (questions.length === 0) {
            alert('No questions available for this language yet!');
            window.location.href = 'index.html';
            return;
        }
        
        document.getElementById('languageTitle').textContent = `${language} Quiz`;
        document.getElementById('totalQuestions').textContent = questions.length;
        
        displayQuestion();
    } catch (error) {
        console.error('Error loading questions:', error);
        alert('Failed to load questions. Please try again.');
    }
}

// Display current question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showCompletionScreen();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Animate question container
    const questionContainer = document.querySelector('.question-container');
    questionContainer.style.animation = 'none';
    setTimeout(() => {
        questionContainer.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

// Check if answer is correct
function checkAnswer(selectedIndex, selectedElement) {
    const question = questions[currentQuestionIndex];
    const allOptions = document.querySelectorAll('.option');
    
    // Disable all options
    allOptions.forEach(option => option.classList.add('disabled'));
    
    if (selectedIndex === question.correctAnswer) {
        // Correct answer
        selectedElement.classList.add('correct');
        
        // Move to next question after delay
        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 1500);
    } else {
        // Wrong answer
        selectedElement.classList.add('wrong');
        
        // Re-enable options after animation
        setTimeout(() => {
            selectedElement.classList.remove('wrong');
            allOptions.forEach(option => {
                option.classList.remove('disabled');
            });
        }, 500);
    }
}

// Show completion screen
function showCompletionScreen() {
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.quiz-header').style.display = 'none';
    document.getElementById('completionScreen').classList.add('show');
}

// Go back to language selection
function goBack() {
    window.location.href = 'index.html';
}

// Initialize quiz on page load
if (window.location.pathname.includes('quiz.html')) {
    loadQuestions();
}