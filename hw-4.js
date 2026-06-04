for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}


for (let i = 7; i <= 22; i++) {
  console.log(i);
}


let obj = {
  "Коля": '200',
  "Вася": '300', 
  "Петя": '400'
};

for (let name in obj) {
  console.log(`"${name}" — зарплата "${obj[name]}" долларов`);
}


let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log(`Итоговое число: ${n}`); // 31.25
console.log(`Количество итераций: ${num}`); 

let firstFriday = 3; 

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
}



