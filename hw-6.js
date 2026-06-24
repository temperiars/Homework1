
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



console.log('=== Задание 1 ===');
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}



console.log('\n=== Задание 2 ===');
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(`Индекс значения 4: ${i}`);
        break;
    }
}



console.log('\n=== Задание 3 ===');
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));



console.log('\n=== Задание 4 ===');
const arr4 = [];
for (let i = 0; i < 3; i++) {
    const inner = [];
    for (let j = 0; j < 3; j++) {
        inner.push(1);
    }
    arr4.push(inner);
}
console.log(arr4);



console.log('\n=== Задание 5 ===');;
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);



console.log('\n=== Задание 6 ===');
const arr6 = [9, 8, 7, 'a', 6, 5];
const filteredArr6 = arr6
  .filter(item => typeof item === 'number')
  .sort((a, b) => a - b);
console.log(filteredArr6);



console.log('\n=== Задание 7 ===');
const arr7 = [9, 8, 7, 6, 5];
const userGuess = parseInt(prompt('Угадайте число из массива [9, 8, 7, 6, 5]:'), 10);
if (!isNaN(userGuess) && arr7.includes(userGuess)) {
  alert('Угадал!');
} else {
  alert('Не угадал');
}




console.log('\n=== Задание 8 ===');
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);



console.log('\n=== Задание 9 ===');
const arr9 = [[1, 2, 3], [4, 5, 6]];
const flatArr = [...arr9[0], ...arr9[1]];
console.log(flatArr); 




console.log('\n=== Задание 10 ===');
const arr10 = [];
for (let i = 0; i < 10; i++) {
    arr10.push(Math.floor(Math.random() * 10) + 1);
}
console.log('Исходный массив:', arr10);
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(`${arr10[i]} + ${arr10[i+1]} = ${arr10[i] + arr10[i+1]}`);
}



console.log('\n=== Задание 11 ===');
function squareArray(arr) {
  return arr.map(num => num * num);
}
console.log(squareArray([1, 2, 3, 4, 5])); 



console.log('\n=== Задание 12 ===');
function getStringLengths(arr) {
    return arr.map(str => str.length);
}
console.log(getStringLengths(['hello', 'world', 'JavaScript']));



console.log('\n=== Задание 13 ===');
function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}
console.log(getNegativeNumbers([-1, 2, -3, 4, -5, 0])); 



console.log('\n=== Задание 14 ===');
const arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 11));
}
const evenArr = arr14.filter(num => num % 2 === 0);
console.log('Исходный массив:', arr14);
console.log('Четные значения:', evenArr);



console.log('\n=== Задание 15 ===');
const arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
console.log('Массив:', arr15);
const sum = arr15.reduce((acc, num) => acc + num, 0);
const average = sum / arr15.length;
console.log(`Среднее арифметическое: ${average.toFixed(2)}`);
