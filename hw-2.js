let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === null) {
  alert('Вы отменили ввод пароля');
} else if (userInput.toLowerCase() === password.toLowerCase()) {
  alert('Пароль введён верно');
} else {
  alert('Пароль введён неправильно');
}


let c = Number(prompt('Введите число для проверки:'));

if (isNaN(c)) {
  console.log('Ошибка: введите корректное число!');
} else if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


let d = Number(prompt('Введите первое число для проверки:'));
let e = Number(prompt('Введите второе число для проверки:'));

if (isNaN(d) || isNaN(e)) {
  console.log('Ошибка: введите корректные числа!');
} else if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}



let a = '2';
let b = '3';
alert(Number(a) + Number(b));


let monthNumber = Number(prompt('Введите номер месяца (1–12) для определения сезона:'));
let seasonMessage = '';

if (monthNumber > 13) {
  seasonMessage = 'Программа не выполняется для номера месяца > 13';
} else if (monthNumber < 1 || monthNumber > 12) {
  seasonMessage = 'Номер месяца должен быть от 1 до 12';
} else {
  switch (monthNumber) {
    case 12: case 1: case 2: seasonMessage = 'Зима'; break;
    case 3: case 4: case 5: seasonMessage = 'Весна'; break;
    case 6: case 7: case 8: seasonMessage = 'Лето'; break;
    case 9: case 10: case 11: seasonMessage = 'Осень'; break;
  }
}
alert(seasonMessage);
