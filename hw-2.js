

let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === null) {
  alert('Вы отменили ввод пароля');
} else if (userInput.toLowerCase() === password.toLowerCase()) {
  alert('Пароль введён верно');
} else {
  alert('Пароль введён неправильно');
}


let c = 2;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


let d = 50;
let e = 150;
if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


let a = '2';
let b = '3';
alert(Number(a) + Number(b));


let monthNumber = 12;
let seasonMessage = '';

if (monthNumber < 1 || monthNumber > 13) {
  seasonMessage = 'Номер месяца должен быть от 1 до 13';
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      seasonMessage = 'Зима';
      break;
    case 3:
    case 4:
    case 5:
      seasonMessage = 'Весна';
      break;
    case 6:
    case 7:
    case 8:
      seasonMessage = 'Лето';
      break;
    case 9:
    case 10:
    case 11:
      seasonMessage = 'Осень';
      break;
  }
}
alert(seasonMessage);
