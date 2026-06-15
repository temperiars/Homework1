function getMin(a, b) {
  return a <= b ? a : b;
}


function checkEven(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}


function printSquare(num) {
  console.log(num * num);
}


function getSquare(num) {
  return num * num;
}


function correctAge(age) {
  if (age < 0) {
    return 'Вы ввели неправильное значение';
  } else if (age <= 12) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!';
  }
}

alert(correctAge(prompt("Сколько вам лет?")));



function multiplyNumbers(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  }
  return a * b;
}



function cubeNumber(num) {
  let number = Number(num);

  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  }

  let cube = number ** 3;
  return `${number} в кубе равняется ${cube}`;
}


for (let i = 0; i <= 10; i++) {
  alert(cubeNumber(i));
}




const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

