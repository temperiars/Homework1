
let a = 10;
alert(a);

a = 20;
alert(a);


let iphoneReleaseYear = 2007;
alert(iphoneReleaseYear);


let jsCreator = "Брендан Айк";
alert(jsCreator);


let num1 = 10;
let num2 = 2;

alert(num1 + num2);
alert(num1 - num2); 
alert(num1 * num2); 
alert(num1 / num2); 


let result = 2 ** 5;
alert(result);


let dividend = 9;
let divisor = 2;
let remainder = dividend % divisor;
alert(remainder);


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
if (age !== null) {
  alert(age);
} else {
  alert("Вы не ввели возраст!");
}


let user = {
  name: "Анна",
  age: 28,
  isAdmin: true
};

let userName = prompt("Как вас зовут?");
if (userName !== null) {
  alert(`Привет, ${userName}!`);
} else {
  alert("Вы не ввели имя!");
}
