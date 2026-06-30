
const quiz = [
  {
    question: "Какого цвета небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2
  }
];



function startQuiz() {
    let correctAnswers = 0;
    let userAnswers = [];

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];

        let questionText = `Вопрос ${i + 1} из ${quiz.length}\n\n`;
        questionText += `${question.question}\n\n`;
        questionText += question.options.join('\n');
        questionText += '\n\nВведите номер правильного ответа (1, 2 или 3):';

        let userAnswer;
        let isValid = false;

        while (!isValid) {
            userAnswer = prompt(questionText);

            if (userAnswer === null) {
                alert('Викторина прервана!');
                return;
            }

            userAnswer = Number(userAnswer);

            if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= 3) {
                isValid = true;
            } else {
                alert('Пожалуйста, введите число от 1 до 3');
            }
        }

        userAnswers.push(userAnswer);

        if (userAnswer === question.correctAnswer) {
            correctAnswers++;
        }
    }

    let resultMessage = `Викторина завершена!\n\n`;
    resultMessage += `Правильных ответов: ${correctAnswers} из ${quiz.length}\n\n`;

    for (let i = 0; i < quiz.length; i++) {
        const userAns = userAnswers[i];
        const correct = quiz[i].correctAnswer;
        const isCorrect = userAns === correct;
        resultMessage += `${i + 1}. ${quiz[i].question}\n`;
        resultMessage += `   Ваш ответ: ${userAns}\n`;
        resultMessage += `   Правильный ответ: ${correct}\n`;
        resultMessage += `   ${isCorrect ? '✅ Верно!' : '❌ Неверно'}\n\n`;
    }

    alert(resultMessage);
}




document.addEventListener('DOMContentLoaded', function() {
    const quizBtn = document.querySelector('#mini-games__card_quiz .play-btn');
    if (quizBtn) {
        quizBtn.addEventListener('click', function(e) {
            e.preventDefault();
            startQuiz();
        });
    }
    
});


function guessTheNumber() {
    const secretNumber = Math.floor(Math.random() * 100) +1;
    let attempts = 0;
    let guessed = false;

    alert('Игра "Угадай число"!\nЯ загадал число от 1 до 100. Попробуй угадать!');

    while (!guessed) {
        const userGuess = prompt('Введите ваше число:');

        if (userGuess === null) {
            alert('Игра прервана!');
            return;
        }

    const guess = Number(userGuess);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Пожалуйста, введите число от 1 до 100!');
        continue;
    }

    attempts++;

    if (guess === secretNumber) {
        alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
        guessed = true;
    } else if (guess < secretNumber) {
        alert(`Загаданное число БОЛЬШЕ ${guess}`);
    } else {
        alert(`Загаданное число МЕНЬШЕ ${guess}`);
    }
    }
} 

function simpleArithmetic() {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let correctAnswer;
    let displayNum1 = num1;
    let displayNum2 = num2;

    if (operation === '/') {
        displayNum2 = Math.floor(Math.random() * 10) + 1;
        displayNum1 = displayNum2 * (Math.floor(Math.random() * 10) + 1);
        correctAnswer = displayNum1 / displayNum2;
    } else {
        switch(operation) {
            case '+': correctAnswer = num1 + num2; break;
            case '-': correctAnswer = num1 - num2; break;
            case '*': correctAnswer = num1 * num2; break;
        }
    }

    const userAnswer = prompt(`Решите пример:\n${displayNum1} ${operation} ${displayNum2} = ?`);

    if (userAnswer === null) {
        alert('Игра прервана!');
        return;
    }

    const answer = Number(userAnswer);
    
    if (isNaN(answer)) {
        alert('Пожалуйста, введите число!');
        return;
    }

       if (answer === correctAnswer) {
        alert(`✅ Правильно! ${displayNum1} ${operation} ${displayNum2} = ${correctAnswer}`);
    } else {
        alert(`❌ Неправильно! Правильный ответ: ${correctAnswer}`);
    }
}

function reverseText() {
    const text = prompt('Введите текст для переворота:');
    
    if (text === null) {
        alert('Игра прервана!');
        return;
    }

    if (text.trim() === '') {
        alert('Вы не ввели текст!');
        return;
    }

    const reversedText = text.split('').reverse().join('');
    alert(`Перевернутый текст:\n\n${reversedText}`);
    console.log(`Оригинал: ${text}`);
    console.log(`Перевернуто: ${reversedText}`);
}


   document.addEventListener('DOMContentLoaded', function() {
   
    

    const quizBtn = document.querySelector('#mini-games__card_quiz .play-btn');
    if (quizBtn) {
        quizBtn.addEventListener('click', function(e) {
            e.preventDefault();
            startQuiz();
        });
    }


    const guessBtn = document.querySelector('#mini-games__card_divine .play-btn');
    if (guessBtn) {
        guessBtn.addEventListener('click', function(e) {
            e.preventDefault();
            guessTheNumber();
        });
    }


    const arithmeticBtn = document.querySelector('#mini-games__card_arithmetic .play-btn');
    if (arithmeticBtn) {
        arithmeticBtn.addEventListener('click', function(e) {
            e.preventDefault();
            simpleArithmetic();
        });
    }


    const textBtn = document.querySelector('#mini-games__card_text .play-btn');
    if (textBtn) {
        textBtn.addEventListener('click', function(e) {
            e.preventDefault();
            reverseText();
        });
    }
});